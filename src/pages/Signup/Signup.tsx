import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import { useState } from "react";
import { validateEmail, validateFilled } from "../../utils/validate";
import { AuthResult, SignupPayloadError, signUp } from "../../redux/thunk/auth";
import { setCookie } from "../../utils";
import Swal from "sweetalert2";
import { useAppDispatch } from "../../redux/hooks/hook";

export default function Signup() {
  const [emailinput, setEmailInput] = useState<{
    value?: string | null;
    error?: string | null;
  }>({});
  const [nameinput, setNameInput] = useState<{
    value?: string | null;
    error?: string | null;
  }>({});
  const [passwordinput, setPasswordInput] = useState<{
    value?: string | null;
    error?: string | null;
  }>({});
  const dispatch = useAppDispatch();
  const [formerr, setFormErr] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      setEmailInput((obj) => {
        return {
          ...obj,
          error: "",
        };
      });
      setPasswordInput((obj) => {
        return {
          ...obj,
          error: "",
        };
      });
      let emailerr = validateEmail(emailinput.value || "");
      let passerr = validateFilled(passwordinput.value || "", 6);
      let nameerr = validateFilled(nameinput.value || "", 7);

      if (emailerr) {
        setEmailInput((obj) => {
          return {
            ...obj,
            error: emailerr,
          };
        });
      }
      if (passerr) {
        setPasswordInput((obj) => {
          return {
            ...obj,
            error: passerr,
          };
        });
      }
      if (nameerr) {
        setNameInput((obj) => {
          return {
            ...obj,
            error: nameerr,
          };
        });
      }
      if (passerr || emailerr || nameerr) {
        return;
      }
      Swal.fire({
        title: "Processing",
        allowOutsideClick: false,
        didOpen() {
          Swal.showLoading();
        },
      });
      const result = await dispatch(
        signUp({
          name: nameinput.value || "",
          email: emailinput.value || "",
          password: passwordinput.value || "",
        })
      );

      const { meta, payload } = result;
      if (meta.requestStatus == "rejected") {
        Swal.close();
        let errorObj = payload as SignupPayloadError;
        if (typeof errorObj.error == "string") {
          setFormErr(errorObj.error);
        }
        if (typeof errorObj.error == "object") {
          let error = errorObj.error;
          setNameInput((val) => {
            return {
              ...val,
              error: error.name ? error.name[0] : "",
            };
          });

          setEmailInput((val) => {
            return {
              ...val,
              error: error.email ? error.email[0] : "",
            };
          });
          setPasswordInput((val) => {
            return {
              ...val,
              error: error.password ? error.password[0] : "",
            };
          });
        }
      }

      if (meta.requestStatus == "fulfilled") {
        let result = payload as AuthResult;
        setNameInput({});
        setEmailInput({});
        setPasswordInput({});
        setCookie("id_1", result.data.token);
        Swal.fire({
          title: "Signup Success!",
          icon: "success",
          confirmButtonColor: "rgba(0, 51, 153, 1)",
          allowOutsideClick: false,
        }).then(() => {
          navigate("/", { replace: true });
        });
      }
    } catch (err) {
      setFormErr(
        "Signup failed, could not complete your process at this time "
      );
    }
  };
  return (
    <form className="w-full" onSubmit={handleSubmit}>
      <div className="flex flex-col items-center">
        <h2 className="font-bold text-3xl text-center text-color3">
          Welcome to News App
        </h2>

        <div className="w-[95%] mt-6 max-w-[350px] text-left">
          <label className="text-color3 font-semibold">Name</label>
          <Input
            parentClassName="mt-2"
            placeholder="John Doe"
            name="name"
            value={nameinput.value || ""}
            errortxt={nameinput.error || ""}
            onChange={(e) => {
              setFormErr("");
              setNameInput((obj) => {
                return { ...obj, value: e.target.value, error: "" };
              });
            }}
          />
        </div>

        <div className="w-[95%] mt-6 max-w-[350px] text-left">
          <label className="text-color3 font-semibold">Email</label>
          <Input
            parentClassName="mt-2"
            placeholder="test@mail.com"
            name="email"
            value={emailinput.value || ""}
            errortxt={emailinput.error || ""}
            onChange={(e) => {
              setFormErr("");
              setEmailInput((obj) => {
                return { ...obj, value: e.target.value, error: "" };
              });
            }}
          />
        </div>

        <div className="w-[95%] mt-6 max-w-[350px] text-left">
          <label className="text-color3 font-semibold">Password</label>
          <Input
            parentClassName="mt-2"
            placeholder="********"
            name="password"
            type="password"
            value={passwordinput.value || ""}
            errortxt={passwordinput.error || ""}
            minLength={6}
            onChange={(e) => {
              setFormErr("");
              setPasswordInput((obj) => {
                return { ...obj, value: e.target.value, error: "" };
              });
            }}
          />
        </div>
        <span className="mt-3">
          Already have an account?{" "}
          <Link
            to="/auth/signin"
            className="text-color1 font-bold cursor-pointer"
          >
            Sign In
          </Link>
        </span>

        {formerr && (
          <span className="font-inter text-sm font-bold leading-4 mt-4 text-red-500">
            {formerr}
          </span>
        )}
        <Button
          title={"Sign Up"}
          type="submit"
          className="text-white"
          onClick={() => {}}
        />
      </div>
    </form>
  );
}

import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import { useState } from "react";
import { useAppDispatch } from "../../redux/hooks/hook";
import Swal from "sweetalert2";
import { validateEmail, validateFilled } from "../../utils/validate";
import { AuthResult, SigninPayloadError, signIn } from "../../redux/thunk/auth";
import { Console, setCookie } from "../../utils";

function Signin() {
  const [emailinput, setEmailInput] = useState<{
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
      if (passerr || emailerr) {
        return;
      }
      Swal.fire({
        title: "Processing",
        allowOutsideClick: false,
        didOpen() {
          Swal.showLoading();
        },
      });
      Console.log(passwordinput.value);
      const result = await dispatch(
        signIn({
          email: emailinput.value || "",
          password: passwordinput.value || "",
        })
      );

      const { meta, payload } = result;
      if (meta.requestStatus == "rejected") {
        Swal.close();
        let errorObj = payload as SigninPayloadError;
        if (typeof errorObj.error == "string") {
          setFormErr(errorObj.error);
        }
        if (typeof errorObj.error == "object") {
          let error = errorObj.error;
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
      setFormErr("Login failed please try again");
    }
  };

  return (
    <form className="w-full" onSubmit={handleSubmit}>
      <div className="flex flex-col items-center">
        <h2 className="font-bold text-3xl text-center text-color3 font-chirp">
          Welcome Back
        </h2>
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
          Don't have an account?{" "}
          <Link
            to="/auth/signup"
            className="text-color1 font-bold cursor-pointer"
          >
            Sign Up
          </Link>
        </span>

        {formerr && (
          <span className="font-inter text-sm font-bold leading-4 mt-4 text-red-500">
            {formerr}
          </span>
        )}

        <Button
          title={"Log In"}
          type="submit"
          className="text-white"
          onClick={() => {}}
        />
      </div>
    </form>
  );
}

export default Signin;

import Swal from "sweetalert2";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import PlaceHolder from "../../components/PlaceHolder/PlaceHolder";
import { useGetUserQuery } from "../../redux/api";
import { useAppDispatch } from "../../redux/hooks/hook";
import { useNavigate } from "react-router-dom";
import { logOut } from "../../redux/thunk/auth";
import { deleteCookie } from "../../utils";

export default function Settings() {
  const userQuery = useGetUserQuery();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const returnInitials = () => {
    if (!userQuery.data || !userQuery.data.name) {
      return "";
    }
    let displaynamearr = userQuery.data.name.split(" ");
    return `${displaynamearr[0][0]} ${displaynamearr[1][0]}`;
  };

  const handleLogout = async () => {
    try {
      if (!window.confirm("Logout ?")) {
        return;
      }

      Swal.fire({
        title: "Processing",
        allowOutsideClick: false,
        didOpen() {
          Swal.showLoading();
        },
      });
      const res = await dispatch(logOut());
      if (res.meta.requestStatus == "rejected") {
        Swal.fire({
          title: "Log out failed please try again",
          allowOutsideClick: false,
          icon: "error",
        });
        return;
      }

      if (res.meta.requestStatus == "fulfilled") {
        Swal.fire({
          title: "Log out successful",
          allowOutsideClick: false,
          icon: "success",
        })
          .then(() => {
            deleteCookie("id_1");
            navigate("/auth", { replace: true });
          })
          .catch(() => {
            deleteCookie("id_1");
            navigate("/auth", { replace: true });
          });
      }
    } catch (err) {
      Swal.fire({
        title: "Logout failed please try again",
        icon: "error",
      });
    }
  };

  const renderSettings = () => {
    if (
      userQuery.isFetching ||
      userQuery.isLoading ||
      userQuery.isError ||
      !userQuery.data
    ) {
      return (
        <>
          <PlaceHolder className="mt-4" />
          <PlaceHolder className="mt-4" />
          <PlaceHolder className="mt-4" />
        </>
      );
    }

    return (
      <div className="flex flex-col items-center mt-4">
        <div className="h-32 w-32 rounded-full bg-color2 flex justify-center items-center">
          <span className="text-white text-5xl">{returnInitials()}</span>
        </div>

        <Button
          title={"Log Out"}
          type="submit"
          className="text-white mt-10 shadow-none"
          onClick={handleLogout}
        />

        <div className="w-[95%] mt-6 max-w-[350px] text-left">
          <label className="text-color3 font-semibold">Name</label>
          <Input
            parentClassName="mt-2"
            placeholder="John Doe"
            name="name"
            value={userQuery.data.name}
            readOnly
          />
        </div>

        <div className="w-[95%] mt-6 max-w-[350px] text-left">
          <label className="text-color3 font-semibold">Email</label>
          <Input
            parentClassName="mt-2"
            placeholder="test@mail.com"
            name="email"
            value={userQuery.data.email}
            readOnly
          />
        </div>
      </div>
    );
  };

  return renderSettings();
}

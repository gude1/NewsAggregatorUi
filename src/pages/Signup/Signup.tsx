import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";

export default function Signup() {
  return (
    <form className="w-full">
      <div className="flex flex-col items-center">
        <h2 className="font-bold text-3xl text-center text-color3 font-inter">
          Welcome to News App
        </h2>
        <div className="w-[95%] mt-6 max-w-[350px] text-left">
          <label className="text-color3 font-semibold">Email</label>
          <Input parentClassName="mt-2" placeholder="test@mail.com" />
        </div>

        <div className="w-[95%] mt-6 max-w-[350px] text-left">
          <label className="text-color3 font-semibold">Password</label>
          <Input
            parentClassName="mt-2"
            placeholder="********"
            type="password"
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
        <Button title={"Sign Up"} className="text-white" onClick={() => {}} />
      </div>
    </form>
  );
}

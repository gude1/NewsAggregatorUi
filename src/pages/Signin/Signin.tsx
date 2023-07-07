import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";

function Signin() {
  return (
    <form className="w-full">
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
          />
        </div>

        <div className="w-[95%] mt-6 max-w-[350px] text-left">
          <label className="text-color3 font-semibold">Password</label>
          <Input
            parentClassName="mt-2"
            placeholder="********"
            name="password"
            type="password"
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
        <Button title={"Sign In"} className="text-white" onClick={() => {}} />
      </div>
    </form>
  );
}

export default Signin;

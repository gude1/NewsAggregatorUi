import LogoSvg from "../../assets/images/logo.svg";
import Input from "../../components/Input/Input";

export default function Signup() {
  return (
    <form className="border-2 border-purple-900 min-h-[100px]">
      <div className="flex flex-col items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-16 w-16"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M18 9v4H6V9H4v6h16V9h-2z" />
          <path d="M18 2H6a3 3 0 00-3 3v11a1 1 0 001 1h16a1 1 0 001-1V5a3 3 0 00-3-3zm-1 13H7v-2h10v2zm0-4H7V7h10v4z" />
        </svg>

        <h2 className="font-bold text-2xl">Signup</h2>
        <Input />
      </div>
    </form>
  );
}

import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Signup from "./pages/Signup/Signup";
import Signin from "./pages/Signin/Signin";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import TitleHeader from "./components/TitleHeader/TitleHeader";

function AuthScreenWrapper() {
  return (
    <div className="h-screen flex flex-col md:flex-row text-center">
      <div className="flex-[0.4] md:rounded-lg md:flex-[1] md:p-6 md:px-10">
        <div className="bg-primary md:rounded-2xl flex flex-col justify-center items-center h-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-16 w-16 text-white animate-pulse"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M18 9v4H6V9H4v6h16V9h-2z" />
            <path d="M18 2H6a3 3 0 00-3 3v11a1 1 0 001 1h16a1 1 0 001-1V5a3 3 0 00-3-3zm-1 13H7v-2h10v2zm0-4H7V7h10v4z" />
          </svg>
          <h1 className="text-3xl text-white font-extrabold">News App</h1>
          <span className="text-white mt-6 text-sm md:text-lg">
            Read news from different sources across the world!
          </span>
        </div>
      </div>

      <div className="flex-[1] flex flex-col pt-10 md:pt-52 items-center">
        <Outlet />
      </div>
    </div>
  );
}

function MainWrapper() {
  return (
    <div>
      <Navbar />
      <TitleHeader />
      <div className="border-1 p-0 m-0 border-red-900 fixed overflow-y-auto top-[4.5rem] left-0 md:left-[17.5rem] right-0 bottom-14 md:bottom-0 px-5">
        <Outlet />
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<AuthScreenWrapper />}>
          <Route path="signup" element={<Signup />} />
          <Route index element={<Signin />} />
          <Route path="signin" element={<Signin />} />
        </Route>
        <Route path="/" element={<MainWrapper />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

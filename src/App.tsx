import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Signup from "./pages/Signup/Signup";
import Signin from "./pages/Signin/Signin";

function AuthScreenWrapper() {
  return (
    <div className="h-screen flex flex-col md:flex-row">
      <div className="flex-[0.4] md:flex-[1] bg-primary flex flex-col justify-center items-center">
        <div className="animate-pulse flex flex-col justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-16 w-16 text-white"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M18 9v4H6V9H4v6h16V9h-2z" />
            <path d="M18 2H6a3 3 0 00-3 3v11a1 1 0 001 1h16a1 1 0 001-1V5a3 3 0 00-3-3zm-1 13H7v-2h10v2zm0-4H7V7h10v4z" />
          </svg>
          <h1 className="text-3xl text-white font-extrabold">News App</h1>
          <span className="text-white mt-6 text-lg">
            Read news from different sources across the world!
          </span>
        </div>
      </div>
      <div className="flex-[1] px-2 pt-24">
        <Outlet />
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route path="auth" element={<AuthScreenWrapper />}>
            <Route path="signup" element={<Signup />} />
            <Route path="signin" element={<Signin />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Signup from "./pages/Signup/Signup";
import Signin from "./pages/Signin/Signin";

function AuthScreenWrapper() {
  return (
    <div className="border-2 border-red-800 h-screen flex">
      <img className="flex-[1] border-2 border-green-800" />
      <div className="flex-[1]">
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

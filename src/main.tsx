import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import BootSplash from "./components/BootSplash/BootSplash.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BootSplash />
    <App />
  </React.StrictMode>
);

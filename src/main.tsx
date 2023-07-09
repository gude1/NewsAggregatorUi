import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { Provider } from "react-redux";
import "./index.css";
import BootSplash from "./components/BootSplash/BootSplash.tsx";
import { store } from "./redux/store/store.ts";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <BootSplash />
      <App />
    </Provider>
  </React.StrictMode>
);

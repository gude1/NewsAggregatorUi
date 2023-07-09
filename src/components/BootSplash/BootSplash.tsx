import { useLayoutEffect, useState } from "react";

export default function BootSplash() {
  const [isLoading, setIsLoading] = useState(true);
  let listener: any = null;

  useLayoutEffect(() => {
    if (document.readyState === "complete") {
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    } else {
      listener = window.addEventListener("load", () => {
        setTimeout(() => {
          setIsLoading(false);
        }, 2000);
      });
    }

    return () => {
      if (listener) {
        window.removeEventListener("load", listener);
      }
    };
  }, []);

  return (
    <div
      className={`transition-opacity duration-1000 ${
        isLoading ? "opacity-100" : "opacity-0"
      }`}
      style={{ pointerEvents: isLoading ? "auto" : "none" }}
    >
      <div className="fixed z-50 top-0 left-0 w-screen h-screen bg-white flex items-center justify-center">
        <div className={`animate-bounce flex flex-col items-center`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-16 w-16 text-primary"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M18 9v4H6V9H4v6h16V9h-2z" />
            <path d="M18 2H6a3 3 0 00-3 3v11a1 1 0 001 1h16a1 1 0 001-1V5a3 3 0 00-3-3zm-1 13H7v-2h10v2zm0-4H7V7h10v4z" />
          </svg>
          <h1 className="text-2xl font-bold text-blue-900 mt-4 font-chirp">
            News App
          </h1>
        </div>
      </div>
    </div>
  );
}

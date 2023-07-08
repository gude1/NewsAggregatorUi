import React from "react";
import { useLocation } from "react-router-dom";

export type TitleHeaderProps = {} & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

export default function TitleHeader({ className }: TitleHeaderProps) {
  const location = useLocation();
  const returnPageTitle = () => {
    switch (location.pathname) {
      case "/":
        return "Home";
      case "/search":
      case "/search/":
        return "Search";
      case "/settings":
      case "/settings/":
        return "Settings";
      default:
        return "";
    }
  };

  return (
    <div
      className={`fixed z-10 px-5 border-b-[0.7px] h-[4.5rem] top-0 left-0 right-0 md:left-[17.5rem] flex items-center border-gray-300 bg-transparent ${className}`}
    >
      <span className="font-bold text-[1.7rem] text-color2">
        {returnPageTitle()}
      </span>
    </div>
  );
}

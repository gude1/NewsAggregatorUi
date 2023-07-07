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
      className={`w-full border-b-[1px] h-12 flex items-center border-gray-300 ${className}`}
    >
      <span className="font-bold text-[1.7rem] leading-[2.4rem] ml-5 text-color2">
        {returnPageTitle()}
      </span>
    </div>
  );
}

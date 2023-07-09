import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export type TitleHeaderProps = {} & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

export default function TitleHeader({ className }: TitleHeaderProps) {
  const location = useLocation();
  const navigate = useNavigate();

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
      case "/details":
      case "/details/":
        return "News Details";
      default:
        return "";
    }
  };

  const renderBackArrow = () => {
    if (location.state && location.state.hasPrev) {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="mr-4 cursor-pointer"
          onClick={() => navigate(-1)}
        >
          <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
        </svg>
      );
    }

    return null;
  };

  return (
    <div
      className={`fixed z-10 px-5 border-b-[0.7px] h-[4.5rem] top-0 left-0 right-0 md:left-[17.5rem] flex items-center border-gray-300 bg-transparent ${className}`}
    >
      {renderBackArrow()}
      <span className="font-bold text-[1.7rem] text-color2">
        {returnPageTitle()}
      </span>
    </div>
  );
}

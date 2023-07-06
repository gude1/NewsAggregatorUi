import React from "react";

type ButtonProps = {
  title?: string | React.ReactElement;
  icon?: React.ReactElement;
  type?: "button" | "submit" | "reset";
  className?: string;
  disabled?: boolean;
  style?: React.CSSProperties;
  onClick?: () => void;
};

export default function Button({
  title,
  icon,
  onClick,
  type = "button",
  disabled = false,
  style,
  className,
}: ButtonProps) {
  return (
    <button
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      type={type}
      style={style}
      className={`${
        disabled ? "bg-[#DFDFDF]" : "bg-primary hover:bg-color2"
      } min-h-[2.5rem] flex justify-center items-center shadow-[0_5.314606666564941px_5.314606666564941px_#00000040]  rounded-[10px] pt-2 pb-2 pl-12 pr-12 font-bold cursor-pointer leading-4 text-xs transition-all ease-in duration-300 mt-5 ${className}`}
    >
      {icon} &nbsp; {`${title}`}
    </button>
  );
}

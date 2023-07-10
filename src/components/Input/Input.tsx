import React, { useState } from "react";
import lockSvg from "../../assets/images/lock.svg";
import eyeSvg from "../../assets/images/eye.svg";
import crosseyeSvg from "../../assets/images/crosseye.svg";

export type InputProps = {
  lefticon?: JSX.Element;
  righticon?: JSX.Element;
  errortxt?: string;
  infotxt?: string;
  successtxt?: string;
  lefticonClick?: () => void;
  righticonClick?: () => void;
  inputClassName?: React.HTMLAttributes<HTMLInputElement>["className"];
  parentClassName?: string;
} & React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export default function Input(props: InputProps) {
  const [showpass, setShowPass] = useState(false);

  const returnLeftIcon = () => {
    if (props.type == "password") {
      return (
        <button
          className="outline-none"
          type="button"
          onClick={props.lefticonClick}
        >
          <img src={lockSvg} className="object-cover object-center w-5" />
        </button>
      );
    }
    if (props.lefticon) {
      return (
        <button
          className="outline-none"
          type="button"
          onClick={props.lefticonClick}
        >
          {props.lefticon}
        </button>
      );
    }
    return null;
  };

  const returnRightIcon = () => {
    if (props.type == "password") {
      return (
        <button
          className="outline-none ml-4 mr-4"
          onClick={() => setShowPass((val) => !val)}
          type="button"
        >
          {showpass ? (
            <img src={crosseyeSvg} className="object-fill object-center w-6" />
          ) : (
            <img src={eyeSvg} className="object-fill object-center w-6" />
          )}
        </button>
      );
    }
    if (props.righticon) {
      return (
        <button
          className="outline-none ml-4 mr-4"
          onClick={props.righticonClick}
          type="button"
        >
          {props.righticon}
        </button>
      );
    }
    return null;
  };

  const returnInputType = () => {
    if (props.type == "password") {
      return showpass ? "text" : "password";
    }
    return props.type;
  };

  const returnInputStyle = () => {
    if (props.errortxt) {
      return "border-2 border-red-500 hover:border-red-500 focus-within:border-red-500";
    }
    if (props.successtxt) {
      return "border-2 border-color2 hover:border-color2 focus-within:border-color2";
    }
    return "";
  };

  const renderStatusText = () => {
    if (props.errortxt) {
      return (
        <span className="text-sm font-bold leading-4 text-red-500">
          {props.errortxt}
        </span>
      );
    }

    if (props.successtxt) {
      return (
        <span className="text-sm font-bold leading-4 text-color2">
          {props.successtxt}
        </span>
      );
    }

    if (props.infotxt) {
      return (
        <span className="text-sm font-bold leading-4 text-color5">
          {props.infotxt}
        </span>
      );
    }
  };

  return (
    <div className={`${props.parentClassName} `}>
      <div
        className={`border border-color2 flex rounded-lg w-full h-[40px] overflow-hidden items-center bg-white transition-all pl-3 ${
          props.className
        } ${returnInputStyle()} `}
      >
        {returnLeftIcon()}
        <input
          className={`w-full ml-[0.8rem] h-full outline-0 border-0 placeholder:text-base text-lg relative placeholder:font-normal font-semibold ${props.inputClassName}`}
          placeholder={props.placeholder || "Placeholder"}
          type={returnInputType()}
          name={props.name || ""}
          disabled={props.disabled}
          value={props.value}
          readOnly={props.readOnly}
          onChange={props.onChange}
          required={props.required || false}
        />
        {returnRightIcon()}
      </div>
      {renderStatusText()}
    </div>
  );
}

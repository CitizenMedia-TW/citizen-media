import React from "react";
import { IconType, IconContext } from "react-icons/lib";

interface Props {
  img: IconType;
  placeholder: string;
  onChange: (e: React.ChangeEvent) => void;
  type?: string;
  className?: string;
}

export default function InputField(props: Props) {
  return (
    <div
      className={
        "w-96 h-14 mb-7 py-1 px-4 rounded-md border-3 border-loginBorder flex flex-row " +
        (props.className ? props.className : "")
      }
    >

      {/* username, e-mail, password icon */}
      <div className="flex items-center">
        <IconContext.Provider value={{ color: "#646464", size: "28px" }}>
          <props.img />
        </IconContext.Provider>
      </div>

      <input
        placeholder={props.placeholder}
        onChange={props.onChange}
        type={props.type ? props.type : "text"}
        className="grow ml-3 text-black text-base placeholder:text-gray-400 focus:outline-0"
      />
    </div>
  );
}

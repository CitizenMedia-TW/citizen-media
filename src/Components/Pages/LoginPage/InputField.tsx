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
        "mb-7 py-1 px-4 rounded-md border-2 border-sky-700 flex flex-row " +
        (props.className ? props.className : "")
      }
    >
      <IconContext.Provider value={{ color: "#646464", size: "22px" }}>
        <props.img />
      </IconContext.Provider>
      <input
        placeholder={props.placeholder}
        onChange={props.onChange}
        type={props.type ? props.type : "text"}
        className="grow ml-3 text-black text-base placeholder:text-gray-400 focus:outline-0"
      />
    </div>
  );
}

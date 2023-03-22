import React from "react";

interface Props {
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
      <input
        placeholder={props.placeholder}
        onChange={props.onChange}
        type={props.type ? props.type : "text"}
        className="grow ml-3 text-black text-base placeholder:text-gray-400 focus:outline-0"
      />
    </div>
  );
}

import React from "react";

type TInputGroupProps = {
  label: string;
  children?: React.ReactNode;
  placeholder?: string;
  type?: React.InputHTMLAttributes<HTMLInputElement>["type"];
};

const InputGroup = ({
  label,
  type = "text",
  children,
  placeholder,
}: TInputGroupProps) => {
  return (
    <div className="w-full flex flex-col gap-1.25">
      <label className="text-xs" htmlFor="">
        {label}
      </label>
      {!children ? (
        <input
          className="w-full text-sm bg-[#F0F0F0D1]/82 px-4 py-2.5 focus:border focus:border-gray-400 outline-none"
          type={type}
          placeholder={placeholder}
        />
      ) : (
        children
      )}
    </div>
  );
};

export default InputGroup;

import React from "react";

type TInputGroupProps = {
  label: string;
  children?: React.ReactNode;
  placeholder?: string;
  type: React.InputHTMLAttributes<HTMLInputElement>["type"];
};

const InputGroup = ({
  label,
  type = "text",
  children,
  placeholder,
}: TInputGroupProps) => {
  return (
    <div className="w-full flex flex-col ">
      <label htmlFor="">{label}</label>
      {!children ? (
        <input
          className="w-full px-4 py-2.5"
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

import React from "react";

type TVariant = "primary" | "dark" | "ghost";
type TSize = "normal" | "small";

type TButtonProps = {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "dark" | "ghost";
  size?: "normal" | "small";
};

const Button = ({
  children,
  className,
  variant = "primary",
  size = "normal",
}: TButtonProps) => {
  const baseStyle =
    "inline-flex gap-2 duration-300 justify-center items-center cursor-pointer hover:scale-105";

  const variants: Record<TVariant, string> = {
    ghost: "bg-transparent hover:bg-gray-100 text-dark",
    dark: "bg-dark text-white hover:bg-dark/85",
    primary: "bg-primary text-white hover:bg-primary/85",
  };

  const sizes: Record<TSize, string> = {
    normal: "py-4 px-9",
    small: "py-[10px] px-7",
  };
  return (
    <button
      className={`${baseStyle} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;

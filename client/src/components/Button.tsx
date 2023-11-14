import React from "react";

interface ButtonProps {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children?: React.ReactNode;
  primaryColor?: boolean;
  secondaryColor?: boolean;
  accentColor?: boolean;
  redColor?: boolean;
  px?: string;
  py?: string;
  disabled?: boolean;
  rounded?: string;
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  px,
  py,
  primaryColor,
  secondaryColor,
  accentColor,
  redColor,
  rounded,
  disabled,
}) => {
  return (
    <button
      disabled={disabled}
      className={`
        disabled:opacity-70
        disabled:cursor-not-allowed
        hover:opacity-80
        transition
        ${rounded ? rounded : "rounded-2xl"}
        ${primaryColor && "bg-primaryColor"}
        ${primaryColor && "text-buttonTextColor"}
        ${secondaryColor && "bg-secondaryColor"}
        ${secondaryColor && "text-textColor"}
        ${accentColor && "bg-accentColor"}
        ${redColor && "bg-red-500"}
        ${redColor && "text-textColor"}
        ${px ? px : "px-8"}
        ${py ? py : "py-2"}
      `}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;

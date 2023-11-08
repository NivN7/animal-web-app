import { ChangeEvent, FC } from "react";

interface InputProps {
  type?: string;
  id?: string;
  placeholder?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input: FC<InputProps> = ({ type, id, placeholder, onChange }) => {
  return (
    <input
      type={type ? type : "text"}
      id={id}
      placeholder={placeholder}
      onChange={onChange}
      className={`
        border 
        p-3 
        rounded-lg 
        bg-backgroundColor 
        text-textColor 
        border-textColor
      `}
    />
  );
};

export default Input;

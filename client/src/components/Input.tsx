import { ChangeEvent, FC } from "react";

interface InputProps {
  type?: string;
  id?: string;
  placeholder?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  defaultValue?: string;
}

const Input: FC<InputProps> = ({
  type,
  id,
  placeholder,
  onChange,
  defaultValue,
}) => {
  return (
    <input
      type={type ? type : "text"}
      id={id}
      placeholder={placeholder}
      onChange={onChange}
      defaultValue={defaultValue}
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

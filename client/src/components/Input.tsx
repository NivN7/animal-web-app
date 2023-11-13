import { ChangeEvent } from "react";

interface InputProps {
  type?: string;
  id?: string;
  placeholder?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  defaultValue?: string;
  value?: any;
}

const Input: React.FC<InputProps> = ({
  type,
  id,
  placeholder,
  onChange,
  defaultValue,
  value,
}) => {
  return (
    <input
      type={type ? type : "text"}
      id={id}
      placeholder={placeholder}
      onChange={onChange}
      defaultValue={defaultValue}
      value={value}
      className={`
        border 
        p-3 
        rounded-lg 
        bg-backgroundColor 
        text-textColor 
        border-textColor
      `}
      required
    />
  );
};

export default Input;

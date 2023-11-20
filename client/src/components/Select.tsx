import React from "react";

interface SelectProps {
  options: { value: string; label: string }[];
  onChange: (selectedValue: string) => void;
  value?: string;
  defaultLabel?: string;
  isRequired?: boolean;
}

const Select: React.FC<SelectProps> = ({
  options,
  onChange,
  value,
  defaultLabel,
  isRequired,
}) => {
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    onChange(value);
  };

  return (
    <select
      value={value || ""}
      onChange={handleSelectChange}
      className="
        border 
        p-3 
        rounded-lg  
        text-textColor 
        border-textColor
        bg-backgroundColor
      "
      required={isRequired ? true : false}
    >
      <option value="">Select {defaultLabel ? defaultLabel : "option"} </option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Select;

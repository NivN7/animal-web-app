import React, { useState } from "react";

interface SelectProps {
  options: { value: string; label: string }[];
  onChange: (selectedValue: string) => void;
  value?: string;
}

const Select: React.FC<SelectProps> = ({ options, onChange, value }) => {
  const [selectedValue, setSelectedValue] = useState<string>("");

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSelectedValue(value);
    onChange(value);
  };

  return (
    <select
      value={value ? value : selectedValue}
      onChange={handleSelectChange}
      className="
        border 
        p-3 
        rounded-lg  
        text-textColor 
        border-textColor
        bg-backgroundColor
      "
      required
    >
      <option value="">Select species</option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Select;

import React, { ChangeEvent } from "react";
import { p } from "../constants";

interface RadioButtonsProps {
  options: { label: string; optionValue: string }[];
  name: string;
  onRadioChange: (selectedOption: string) => void;
  value?: string;
}

const RadioButtons: React.FC<RadioButtonsProps> = ({
  options,
  onRadioChange,
  name,
  value,
}) => {
  const handleRadioChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedOption = event.target.value;
    onRadioChange(selectedOption);
  };

  return (
    <div className="flex gap-4">
      {options.map((option) => (
        <label
          key={option.optionValue}
          className="flex items-center cursor-pointer"
        >
          <input
            type="radio"
            name={name}
            value={option.optionValue}
            checked={option.optionValue === value}
            onChange={handleRadioChange}
            className="w-4 h-4"
            required
          />
          <p className={`${p} ml-2`}>{option.label}</p>
        </label>
      ))}
    </div>
  );
};

export default RadioButtons;

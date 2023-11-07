import { useContext } from "react";

import { ThemeContext } from "../contexts";
import { ThemeContextInterface } from "../types";
import IcAddSVG from "./svgs/IcAddSVG";
import {
  h6,
  p,
  ic_height,
  ic_width,
  darkTextColor,
  lightTextColor,
} from "../constants";

export type AccordionProps = {
  key: number;
  title: string;
  data: string;
  isOpen: boolean;
  toggleAccordion: React.MouseEventHandler;
};

const Accordion = (props: AccordionProps) => {
  const { darkTheme } = useContext(ThemeContext) as ThemeContextInterface;

  return (
    <div className="mb-8">
      <button
        className={`
          w-full 
          p-4 
          text-left 
          ${h6}
          bg-secondaryColor
          hover:opacity-80
          transition 
          duration-300
          ${props.isOpen ? "rounded-t-2xl" : "rounded-2xl"}  
        `}
        onClick={props.toggleAccordion}
      >
        {props.title}
        <span
          className={`
            float-right 
            transform 
            ${props.isOpen ? "rotate-45" : "rotate-0"}  
            transition-transform
            duration-300
          `}
        >
          {darkTheme ? (
            <IcAddSVG
              color={darkTextColor}
              width={ic_width}
              height={ic_height}
            />
          ) : (
            <IcAddSVG
              color={lightTextColor}
              width={ic_width}
              height={ic_height}
            />
          )}
        </span>
      </button>
      {props.isOpen && (
        <div
          className={`
            p-4
            ${p}
            bg-secondaryColor
            rounded-b-2xl
          `}
        >
          {props.data}
        </div>
      )}
    </div>
  );
};

export default Accordion;

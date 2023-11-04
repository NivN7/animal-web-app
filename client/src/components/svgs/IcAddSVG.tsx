import { SVGProps } from "../../types";

const IcAddSVG = (props: SVGProps) => {
  return (
    <svg
      width={props.width || "32"}
      height={props.height || "32"}
      viewBox="0 0 33 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M26 18.3334H18V26.3334H15.3334V18.3334H7.33337V15.6667H15.3334V7.66675H18V15.6667H26V18.3334Z"
        fill={props.color || "#010104"}
      />
    </svg>
  );
};

export default IcAddSVG;

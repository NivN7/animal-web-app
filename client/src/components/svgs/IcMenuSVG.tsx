import { SVGProps } from "../../types";

const IcMenuSVG = (props: SVGProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width || "32"}
      height={props.height || "32"}
      viewBox="0 0 48 48"
    >
      <path
        d="M6 36h36v-4H6v4zm0-10h36v-4H6v4zm0-14v4h36v-4H6z"
        fill={props.color || "#010104"}
      />
    </svg>
  );
};

export default IcMenuSVG;

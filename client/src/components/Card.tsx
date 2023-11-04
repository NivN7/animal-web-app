import { h5, p } from "../constants";

type CardProps = {
  title: string;
  subtitle: string;
  titleCenter?: boolean;
  subtitleCenter?: boolean;
  anotherSubtitle?: string;
};

const Card = (props: CardProps) => {
  return (
    <div
      className="
        flex
        flex-col
        items-start
        px-4
        py-4
        gap-4
        bg-cardColor
        rounded-2xl
      "
    >
      <h5
        className={`
          ${h5}
          underline
          decoration-2
          underline-offset-8
          decoration-primaryColor
          w-full
          ${props.titleCenter && "text-center"}
        `}
      >
        {props.title}
      </h5>
      <p
        className={`
          ${p}
          w-full
          ${props.subtitleCenter && "text-center"}
        `}
      >
        {props.subtitle} <br /> <br />
        {props.anotherSubtitle}
      </p>
    </div>
  );
};

export default Card;

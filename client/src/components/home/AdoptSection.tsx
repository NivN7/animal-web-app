import Card from "../Card";
import AdoptSectionSVG from "../svgs/AdoptSectionSVG";
import { lightAccentColor, darkAccentColor, h2 } from "../../constants";

type HeroSectionProps = {
  isDarkMode?: boolean;
};

const cards = [
  {
    key: 1,
    title: "Save a life",
    subtitle:
      "When you adopt, you're giving a homeless animal a chance for a better life.",
  },
  {
    key: 2,
    title: "Unconditional love",
    subtitle: "Adopted pets are known for their boundless love and loyalty.",
  },
  {
    key: 3,
    title: "Health benifits",
    subtitle:
      "Studies show that owning a pet can reduce stress and improve overall well-being.",
  },
  {
    key: 4,
    title: "Rescue and Rehabilitation",
    subtitle:
      "Help rescue organizations free up space to save more animals in need.",
  },
];

const AdoptSection = (props: HeroSectionProps) => {
  return (
    <section
      className="
        px-4
        py-2
      "
    >
      <h2
        className={` 
          ${h2}
          text-center
          mt-24
          mb-12
        `}
      >
        Why to adopt Animal?
      </h2>
      <div
        className="
          flex 
          flex-col
          lg:flex-row
          items-center
          justify-evenly
          px-4
          py-2
        "
      >
        <div className="flex flex-col flex-wrap gap-8 w-min-[464px]">
          {cards.map((card) => (
            <Card key={card.key} title={card.title} subtitle={card.subtitle} />
          ))}
        </div>

        <div className="md:w-[627px] md:h-auto ml-4 mt-4 lg:mt-0">
          <AdoptSectionSVG
            width="auto"
            height="auto"
            color={props.isDarkMode ? darkAccentColor : lightAccentColor}
          />
        </div>
      </div>
    </section>
  );
};

export default AdoptSection;

import Button from "../Button";
import HeroSectionSVG from "../svgs/HeroSectionSVG";
import { lightAccentColor, darkAccentColor, h1, p } from "../../constants";

type HeroSectionProps = {
  isDarkMode?: boolean;
};

const HeroSection = (props: HeroSectionProps) => {
  return (
    <section>
      <div
        className="
          flex
          flex-col-reverse
          lg:flex-row
          items-center
          justify-evenly
          px-4
          py-2
        "
      >
        <div className="md:w-[588px] md:h-auto">
          <HeroSectionSVG
            width="auto"
            height="auto"
            color={props.isDarkMode ? darkAccentColor : lightAccentColor}
          />
        </div>

        <div
          className="
            flex
            flex-col
            items-start
            gap-8
          "
        >
          <h1 className={h1}>
            Give a
            <span
              className=" 
                text-transparent
                bg-clip-text
                bg-gradient-to-r
                from-primaryColor
                to-accentColor
              "
            >
              {" "}
              Home
            </span>
            ,
            <br /> Save a Life
          </h1>
          <p className={p}>
            Discover a world of wagging tails and purring hearts. Our adoptable
            <br />
            animals are looking for love, warmth, and a place to call home. Join
            <br />
            us on a heart-warming journey to make a difference—one paw at a
            time.
            <br />
          </p>
          <div className="flex gap-8 mb-8">
            <Button
              onClick={(e) => {
                window.location.href = "#howToSection";
                e.preventDefault();
                e.stopPropagation();
              }}
              secondaryColor={true}
            >
              How to adopt?
            </Button>
            <Button onClick={() => {}} primaryColor={true}>
              Get Started
            </Button>
          </div>
        </div>
      </div>
      <span
        className="
          text-textColor
          text-center
          text-base
          font-light
          block
          mt-12
          lg:mt-0
        "
      >
        scroll to see more
      </span>
    </section>
  );
};

export default HeroSection;

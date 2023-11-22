import { useNavigate } from "react-router-dom";

import Button from "../Button";
import HeroSectionSVG from "../svgs/HeroSectionSVG";
import { lightAccentColor, darkAccentColor, h1, p } from "../../constants";

type HeroSectionProps = {
  isDarkMode?: boolean;
};

const HeroSection = (props: HeroSectionProps) => {
  const navigate = useNavigate();

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
        <div className="w-full h-full sm:w-[588px]">
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
              home
            </span>
            ,
            <br /> save a life
          </h1>
          <p className={p}>
            Discover a world of wagging tails and purring hearts. Our adoptable
            <br />
            animals are looking for love, warmth, and a place to call home. Join
            us
            <br />
            on a heartwarming journey to make a difference. one paw at a time.
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
            <Button onClick={() => navigate("/search")} primaryColor={true}>
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
        Scroll to see more
      </span>
    </section>
  );
};

export default HeroSection;

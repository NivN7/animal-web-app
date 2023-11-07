import { useState } from "react";

import Accordion from "../Accordion";
import { h2, p } from "../../constants";

const FaqSection = () => {
  const [accordions, setAccordion] = useState([
    {
      key: 1,
      title: "What is animal adoption?",
      isOpen: false,
      data: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet diam erat. Aliquam et auctor enim. Nunc fringilla vestibulum fringilla. Duis venenatis ultrices diam lacinia porttitor. Etiam a nunc in arcu scelerisque elementum.`,
    },
    {
      key: 2,
      title: "Why should I adopt a pet instead of buying one?",
      data: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet diam erat. Aliquam et auctor enim. Nunc fringilla vestibulum fringilla. Duis venenatis ultrices diam lacinia porttitor. Etiam a nunc in arcu scelerisque elementum.`,
      isOpen: false,
    },
    {
      key: 3,
      title: "What types of animals are available for adoption?",
      data: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet diam erat. Aliquam et auctor enim. Nunc fringilla vestibulum fringilla. Duis venenatis ultrices diam lacinia porttitor. Etiam a nunc in arcu scelerisque elementum.`,
      isOpen: false,
    },
    {
      key: 4,
      title: "What is the adoption fee, and what does it include?",
      data: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet diam erat. Aliquam et auctor enim. Nunc fringilla vestibulum fringilla. Duis venenatis ultrices diam lacinia porttitor. Etiam a nunc in arcu scelerisque elementum.`,
      isOpen: false,
    },
    {
      key: 5,
      title: "What is the adoption criteria?",
      data: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet diam erat. Aliquam et auctor enim. Nunc fringilla vestibulum fringilla. Duis venenatis ultrices diam lacinia porttitor. Etiam a nunc in arcu scelerisque elementum.`,
      isOpen: false,
    },
  ]);

  const toggleAccordion = (accordionkey: number) => {
    const updatedAccordions = accordions.map((accord) => {
      if (accord.key === accordionkey) {
        return { ...accord, isOpen: !accord.isOpen };
      } else {
        return { ...accord, isOpen: false };
      }
    });

    setAccordion(updatedAccordions);
  };

  return (
    <section
      className="
        flex
        flex-col
        lg:flex-row
        lg:items-start
        items-center
        justify-around
        mt-24
        px-4
        py-2
      "
    >
      <div className="flex flex-col gap-4">
        <h2 className={h2}>FAQ</h2>
        <p
          className={`
            ${p}
            mb-8
          `}
        >
          Responses to common inquiries you may have.
        </p>
      </div>
      <div className="flex flex-col  w-full sm:w-[544px]">
        {accordions.map((accordion) => (
          <Accordion
            key={accordion.key}
            title={accordion.title}
            data={accordion.data}
            isOpen={accordion.isOpen}
            toggleAccordion={() => toggleAccordion(accordion.key)}
          />
        ))}
      </div>
    </section>
  );
};

export default FaqSection;

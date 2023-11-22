import { useState } from "react";

import Accordion from "../Accordion";
import { h2, p } from "../../constants";

const FaqSection = () => {
  const [accordions, setAccordion] = useState([
    {
      key: 1,
      title: "What is ANIMAL?",
      isOpen: false,
      data: `ANIMAL is a dedicated pet listing platform where you can showcase your pet for potential adoptive families.`,
    },
    {
      key: 2,
      title: "Why adopt instead of buy?",
      data: `Adoption saves lives, combats overpopulation, and provides cost-effective, immediate companionship with a diverse range of healthy and ethically supported pets.`,
      isOpen: false,
    },
    {
      key: 3,
      title: "What types of animals are available for adoption?",
      data: `A variety of animals are available for adoption, including Dogs, Cats, Fish, Birds, Rabbits, Guinea Pigs, and Hamsters.`,
      isOpen: false,
    },
    {
      key: 4,
      title: "What is the adoption fee?",
      data: `Please contact the listee directly for information on the adoption fee.`,
      isOpen: false,
    },
    {
      key: 5,
      title: "What is the adoption criteria?",
      data: `Applicants must be 18 years or older.`,
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

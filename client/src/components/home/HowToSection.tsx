import { h2 } from "../../constants";
import Card from "../Card";

const HowToSection = () => {
  return (
    <section
      id="howToSection"
      className="
        px-4
        py-2
      "
    >
      <h2
        className={`
          ${h2}
          text-center
          mt-12
          mb-12
        `}
      >
        How do I adopt or list a pet on this platform?
      </h2>
      <div
        className="
          flex
          flex-col
          justify-evenly
          lg:flex-row
          items-center
          lg:items-start
          gap-8
          flex-wrap
        "
      >
        <div className="w-full sm:w-[544px]">
          <Card
            title="Adopting a pet"
            subtitle="Search for your ideal animal using our search section. Browse the list of available pets."
            anotherSubtitle="Click on the animal card to access detailed information about the pet. Get to know your potential new family member, and contact the listee when you're ready."
            titleCenter={true}
            subtitleCenter={true}
          />
        </div>

        <div className="w-full sm:w-[544px]">
          <Card
            title="Listing a pet"
            subtitle="Log in or sign up to your profile."
            anotherSubtitle="Visit your profile page and click the 'Create new listing' button. Fill in the necessary details and submit. It's that simple!"
            titleCenter={true}
            subtitleCenter={true}
          />
        </div>
      </div>
    </section>
  );
};

export default HowToSection;

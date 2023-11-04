import { useContext } from "react";

import HeroSection from "../components/home/HeroSection";
import AdoptSection from "../components/home/AdoptSection";
import HowToSection from "../components/home/HowToSection";
import FaqSection from "../components/home/FaqSection";
import { ThemeContext } from "../contexts";
import { ThemeContextInterface } from "../types";
import Footer from "../components/Footer";

const Home = () => {
  const { darkTheme } = useContext(ThemeContext) as ThemeContextInterface;

  return (
    <main
      className="
        flex 
        flex-col
      "
    >
      <HeroSection isDarkMode={darkTheme} />
      <AdoptSection />
      <HowToSection />
      <FaqSection />
      <Footer />
    </main>
  );
};

export default Home;

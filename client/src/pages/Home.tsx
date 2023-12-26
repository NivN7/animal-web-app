import { useContext } from "react";
import React, { Suspense } from "react";

import HeroSection from "../components/home/HeroSection";
// import AdoptSection from "../components/home/AdoptSection";
// import HowToSection from "../components/home/HowToSection";
// import FaqSection from "../components/home/FaqSection";
import { ThemeContext } from "../contexts";
import { ThemeContextInterface } from "../types";
import Footer from "../components/Footer";
import LoadingSpinner from "../components/LoadingSpinner";

const LazyAdoptSection = React.lazy(
  () => import("../components/home/AdoptSection")
);
const LazyHowToSection = React.lazy(
  () => import("../components/home/HowToSection")
);
const LazyFaqSection = React.lazy(
  () => import("../components/home/FaqSection")
);

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
      <Suspense fallback={<LoadingSpinner />}>
        <LazyAdoptSection />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <LazyHowToSection />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <LazyFaqSection />
      </Suspense>

      <Footer />
    </main>
  );
};

export default Home;

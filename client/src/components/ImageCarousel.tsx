import React, { useState } from "react";

interface ImageCarouselProps {
  images: string[];
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToNextSlide = () => {
    const newIndex = (currentImageIndex + 1) % images.length;
    setCurrentImageIndex(newIndex);
  };

  const goToPrevSlide = () => {
    const newIndex = (currentImageIndex - 1 + images.length) % images.length;
    setCurrentImageIndex(newIndex);
  };

  const isPrevDisabled = currentImageIndex === 0;
  const isNextDisabled = currentImageIndex === images.length - 1;

  return (
    <div
      className="
        relative
        w-full
        max-w-2xl
        mx-auto
        overflow-hidden
      "
    >
      <img
        src={images[currentImageIndex]}
        alt={`Slide ${currentImageIndex + 1}`}
        className="
          w-full 
          object-cover
          transition-transform 
          transform 
          ease-in-out 
          duration-300
          rounded-lg
        "
      />
      <button
        onClick={goToPrevSlide}
        disabled={isPrevDisabled}
        className={`
          absolute 
          top-1/2 
          left-4 
          transform 
          -translate-y-1/2 
          text-2xl 
          text-white 
          bg-gray-800 
          rounded-full 
          px-2 
          py-1 
          cursor-pointer 
          ${isPrevDisabled ? "opacity-50 cursor-not-allowed" : ""}
        `}
      >
        &#8249;
      </button>
      <button
        onClick={goToNextSlide}
        disabled={isNextDisabled}
        className={`
          absolute 
          top-1/2 
          right-4 
          transform 
          -translate-y-1/2 
          text-2xl 
          text-white 
          bg-gray-800 
          rounded-full 
          px-2 
          py-1 
          cursor-pointer 
          ${isNextDisabled ? "opacity-50 cursor-not-allowed" : ""}
        `}
      >
        &#8250;
      </button>
    </div>
  );
};

export default ImageCarousel;

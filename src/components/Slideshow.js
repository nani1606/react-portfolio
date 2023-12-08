// Slideshow.js

import React, { useState } from "react";
import slide1 from "../assets/slide1.png"; 
import slide2 from "../assets/slide2.png";
import slide3 from "../assets/slide3.png";
import slide4 from "../assets/slide4.png";
import slide5 from "../assets/slide5.png";
import slide6 from "../assets/slide6.png";

const slides = [slide1, slide2, slide3, slide4, slide5, slide6]; // Array of images

export default function Slideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div id="slideshow" className="flex items-center justify-center space-x-4">
      <button
        className="bg-gray-200 px-4 py-2 rounded-lg"
        onClick={prevSlide}
      >
        Previous
      </button>
      <div>
        <img
          className="max-w-full h-auto"
          src={slides[currentSlide]}
          alt={`Slide ${currentSlide + 1}`}
        />
      </div>
      <button
        className="bg-gray-200 px-4 py-2 rounded-lg"
        onClick={nextSlide}
      >
        Next
      </button>
    </div>
  );
}

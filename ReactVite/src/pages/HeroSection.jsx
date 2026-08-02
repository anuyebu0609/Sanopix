import { useState, useEffect } from "react";
import {
  Digital,
  Video,
  Front,
  Bussiness,
} from "../assets/HeroSection/HeroSectionImage";

const HeroSection = () => {
  const images = [Digital, Video, Front, Bussiness];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentImage((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  return (
    <section className="relative w-full overflow-hidden">
      {/* Slider */}
      <div
        className="
          relative
          w-full
          h-[220px]
          sm:h-[320px]
          md:h-[450px]
          lg:h-[550px]
          xl:h-[650px]
          overflow-hidden
        "
      >
        {/* Images Wrapper */}
        <div
          className="flex h-full transition-transform duration-1000 ease-in-out"
          style={{
            transform: `translateX(-${currentImage * 100}%)`,
          }}
        >
          {images.map((image, index) => (
            <div key={index} className="min-w-full h-full">
              <img
                src={image}
                alt={`Banner ${index + 1}`}
                className="w-full h-full object-cover"
                draggable="false"
              />
            </div>
          ))}
        </div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/10"></div>

        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="
            absolute
            left-3
            md:left-6
            top-1/2
            -translate-y-1/2
            w-10 h-10
            md:w-12 md:h-12
            rounded-full
            bg-white/90
            shadow-xl
            hover:scale-110
            transition
            z-20
          "
        >
          ❮
        </button>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="
            absolute
            right-3
            md:right-6
            top-1/2
            -translate-y-1/2
            w-10 h-10
            md:w-12 md:h-12
            rounded-full
            bg-white/90
            shadow-xl
            hover:scale-110
            transition
            z-20
          "
        >
          ❯
        </button>

        {/* Dots */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              className={`transition-all duration-300 rounded-full ${
                currentImage === index
                  ? "w-8 h-2 bg-[#FEC827]"
                  : "w-2 h-2 bg-white"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
import { useState, useEffect, useRef } from "react";

export default function Showcase() {
  const images = [
    {
      url: "./assets/img/showcase-img1.png",
      description: "Showcase 1",
    },
    {
      url: "./assets/img/showcase-img2.png",
      description: "Showcase 2",
    },
    {
      url: "./assets/img/showcase-img3.png",
      description: "Showcase 3",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef(null);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % images.length);
    resetInterval();
  };

  const resetInterval = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 3000);
  };

  useEffect(() => {
    resetInterval();
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <div
      id="showcase"
      className="h-[80vh] flex flex-col lg:flex-row items-center px-6 sm:px-10 lg:px-20 pt-16 sm:pt-20 lg:pt-0 relative"
    >
      {/* Text Section */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-start mb-10 lg:mb-0">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-medium mb-4">
          Showcase
        </h1>
        <p className="text-base sm:text-lg lg:text-xl font-light leading-relaxed max-w-lg lg:text-left">
          Di Siporto, kamu bisa lihat langsung berbagai portofolio digital yang
          sudah kami buat untuk pelajar, mahasiswa, sampai para profesional.
          Setiap karya dirancang dengan desain modern, rapi, dan pastinya sesuai
          kebutuhan masing-masing pengguna.
          <br />
          Yuk, jelajahi hasil karya kami dan temukan inspirasi baru untuk
          portofolio impianmu!
        </p>
      </div>

      {/* Image Section */}
      <div className="w-screen lg:w-1/2 flex justify-center items-center relative mt-12 lg:mt-0 h-[320px] sm:h-[400px] lg:h-[500px] overflow-hidden sm:overflow-visible">
        {images.map((img, index) => {
          let position = "";
          let blur = "";

          if (index === activeIndex) {
            position = "z-30 scale-110 opacity-100 translate-x-0";
            blur = "blur-0";
          } else if (index === (activeIndex + 1) % images.length) {
            position =
              "z-20 scale-90 translate-x-20 sm:translate-x-28 lg:translate-x-40 rotate-3";
            blur = "blur-sm";
          } else {
            position =
              "z-20 scale-90 -translate-x-20 sm:-translate-x-28 lg:-translate-x-40 -rotate-3";
            blur = "blur-sm";
          }

          return (
            <div
              key={index}
              onClick={handleNext}
              className={`absolute flex flex-col items-center transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] cursor-pointer ${position}`}
            >
              <img
                src={img.url}
                alt={`Portfolio ${index}`}
                className={`rounded-lg shadow-2xl w-[260px] sm:w-[300px] lg:w-[400px] h-auto object-cover ${blur}`}
              />
              <p className="mt-3 sm:mt-4 text-center text-black text-sm sm:text-lg font-medium">
                {img.description}
              </p>
            </div>
          );
        })}
      </div>

      {/* Decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-4 left-4 sm:bottom-12 sm:left-12">
          <div className="relative w-8 h-8 bg-orange-500 opacity-70">
            <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 w-8 h-8 rounded-full bg-orange-200"></div>
          </div>
        </div>
        <div className="absolute top-2 right-4 sm:top-4 sm:right-12">
          <div className="relative w-8 h-8 bg-orange-500 opacity-70">
            <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-8 h-8 rounded-full bg-orange-200"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
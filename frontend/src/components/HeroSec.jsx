import React, { useEffect } from "react";
import Cards from "./Cards";

const HeroSec = ({ readMode }) => {
  useEffect(() => {
    if (readMode) {
      const text = `
        Welcome to Vision Guard. Sense, navigate, and protect.
        Vision Guard is here to empower the visually impaired with advanced technology.
        Scroll down to explore more about our mission and features.
      `;
      const speech = new SpeechSynthesisUtterance(text);
      speech.rate = 2;
      speech.pitch = 1; 
      window.speechSynthesis.speak(speech);
    }
  }, [readMode]);

  return (
    <section className="bg-white min-h-screen pt-10">
      <div className="relative bg-black">
        <img
          className="h-screen w-screen object-cover opacity-55"
          src="./assets/HeroImage.png"
          alt="Hero Background"
        />
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 left-1/4 max-sm:left-1/2 transform -translate-x-1/2 max-sm:text-center text-white text-7xl font-extrabold">
        <h1>sense,</h1>
        <h1>navigate</h1>
        <h1 className="text-[#cec4ba]">& protect.</h1>
        <h3 className="text-white font-light font-lustria text-xl mt-6">
          VISION GUARD
        </h3>
        <button className="bg-[#191a1d] font-thin text-base rounded-full text-white px-9 py-2">
          Read More
        </button>
      </div>
      <div className="bg-white">
        <div className="text-center justify-center items-center py-20 mx-64 max-sm:mx-0 max-sm:px-12 max-sm:w-full text-sm w-1/4 flex gap-2 flex-col">
          <p className="text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
            nisi libero cum saepe quae ipsum velit voluptates nulla veritatis
            quos doloremque.
          </p>
          <hr className="border-[#7d6c54] w-full" />
          <p className="w-[500px] max-sm:w-full">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
      <div className="relative bottom-20 max-sm:hidden">
        <div className="absolute bottom-0 right-72">
          <Cards />
        </div>
        <div className="absolute bottom-28 right-32 border">
          <Cards imgsrc={"./assets/boy_image.png"} />
        </div>
      </div>
    </section>
  );
};

export default HeroSec;

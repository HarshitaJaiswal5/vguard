import React, { useState } from "react";
import Tags from "./Tags";

const AboutSec = ({ enableReadMode }) => {
  const [readModeTriggered, setReadModeTriggered] = useState(false); 
  const cardData = [
    {
      imgsrc: "/assets/share.png",
      text: "lorem ipsum sit amet",
    },
    {
      imgsrc: "/assets/lock.png",
      text: "lorem ipsum sit amet",
    },
    {
      imgsrc: "/assets/lock.png",
      text: "lorem ipsum sit amet",
    },
    {
      imgsrc: "/assets/share.png",
      text: "lorem ipsum sit amet",
    },
  ];

  const handleMouseEnter = () => {
    if (!readModeTriggered) {
      setReadModeTriggered(true); 
      enableReadMode();
    }
  };

  return (
    <section onMouseEnter={handleMouseEnter}>
      <div className="bg-[linear-gradient(to_bottom,_#ffffff_50%,_#7d6c54_50%)] max-sm:bg-[linear-gradient(to_bottom,_#7d6c54_50%,_#7d6c54_50%)] p-3 flex flex-col justify-center items-center gap-5 pt-16">
        <div className="flex flex-col font-lustria justify-center items-center gap-2 w-1/3 max-sm:w-full p-1">
          <h2 className="text-4xl max-sm:text-center max-sm:text-white">
            WELCOME TO <span className="text-[#cec4ba]">VGUARD</span>
          </h2>
          <p className="text-md text-center max-sm:text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
          </p>
        </div>
        <video
          src="./assets/video.mp4"
          className="w-1/2 max-sm:w-full border-8 border-white mt-5"
          controls
        ></video>
        <div className="flex flex-col justify-center items-center text-white">
          <h2 className="text-2xl mt-7 ">WHY CHOOSE VGAURD?</h2>
          <p className="max-w-xl text-center mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-20 pb-20 mt-7">
          {cardData.map((Tag, index) => (
            <Tags key={index} imgsrc={Tag.imgsrc} text={Tag.text} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSec;

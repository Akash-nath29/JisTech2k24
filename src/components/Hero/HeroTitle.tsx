/* eslint-disable react-hooks/rules-of-hooks */
import { useState, useEffect } from "react";
import Sparkle from "react-sparkle";
import { isMobile } from "react-device-detect";
import './ShineAnimation.css';

const HeroTitle = () => {
  const [textSize, setTextSize] = useState(8); // Initial text size
  const maxFontSize = 12; // Maximum font size
  {
    !isMobile &&
      useEffect(() => {
        const handleScroll = () => {
          // Calculate new text size based on scroll position
          const newSize = 8 + (window.scrollY / window.innerHeight) * 10; // Adjust as needed
          setTextSize(Math.min(newSize, maxFontSize)); // Clamp to maximum font size
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, []);
  }
  return (
    <span
      className= {`text-center text-white font-bold ${isMobile && `text-5xl`}`}
      style={{ fontSize: `${!isMobile&&`${textSize}rem`}` }}
    >
        <div className="absolute top-0 left-0 h-screen w-[95%] -z-10">
          <Sparkle
            color={"#FFF"}
            count={50}
            minSize={5}
            maxSize={10}
            fadeOutSpeed={10}
            flicker={false}
          />
        </div>
      <span>
        JISTECH
        <span className="text-violet-500 shine-animation">2K24</span>
        {/* <div className="absolute h-[6rem] w-[40rem] -z-10 flex items-center content-center justify-center -mt-24 -ml-4">
          <Sparkle color={"#FFF"} count={5} minSize={20} maxSize={30} fadeOutSpeed={10} flicker={false} />
        </div> */}
      </span>
    </span>
  );
};

export default HeroTitle;

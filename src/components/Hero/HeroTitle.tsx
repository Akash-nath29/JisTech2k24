import { useState, useEffect } from "react";
import { motion, useViewportScroll } from "framer-motion";
import Sparkle from "react-sparkle";
import { isMobile } from "react-device-detect";
import "./ShineAnimation.css";

const HeroTitle = () => {
  const [textSize, setTextSize] = useState(8); // Initial text size
  const { scrollY } = useViewportScroll();

  useEffect(() => {
    if (!isMobile) {
      const handleScroll = () => {
        // Calculate new text size based on scroll position
        const newSize = 8 + (scrollY.get() / window.innerHeight) * 10; // Adjust as needed
        setTextSize(Math.min(newSize, maxFontSize)); // Clamp to maximum font size
      };

      return scrollY.onChange(() => handleScroll());
    }
  }, [scrollY]);

  const maxFontSize = 12; // Maximum font size

  const textSizeVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, fontSize: `${textSize}rem` },
  };

  return (
    <motion.span
      className={`text-center text-white font-bold`}
      initial="hidden"
      animate="visible"
      variants={textSizeVariants}
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
      </span>
    </motion.span>
  );
};

export default HeroTitle;

import React, { useEffect, useState } from "react";
import "./SparklingText.css"; // Import CSS file for styling

const SparklingText: React.FC = () => {
  const [sparkles, setSparkles] = useState<JSX.Element[]>([]);

  useEffect(() => {
    // Function to generate a random number between min and max
    const randomInRange = (min: number, max: number) => {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    // Function to generate a sparkle element
    const generateSparkle = (key: number) => {
      const randomCorner = Math.random() < 0.5; // Randomly choose between true and false
      const positionStyle = randomCorner
        ? {
            left: `-${randomInRange(0, 10)}%`,
            top: `-${randomInRange(0, 100)}%`,
          }
        : {
            right: `-${randomInRange(0, 10)}%`,
            bottom: `-${randomInRange(0, 100)}%`,
          };
      const style = {
        ...positionStyle,
        // animationDelay: `-${randomInRange(0, 1000)}ms`,
      };
      return (
        <img
          key={key}
          className="sparkleText"
          style={style}
          src="Sparkle.svg"
          alt="sparkle"
        />
      );
    };

    // Function to generate sparkles around the text
    const generateSparkles = () => {
      const newSparkles: JSX.Element[] = [];
      for (let i = 0; i < 3; i++) {
        newSparkles.push(generateSparkle(i));
      }
      setSparkles(newSparkles);
    };

    // Generate sparkles initially
    generateSparkles();

    // Set interval to generate sparkles every second
    const interval = setInterval(() => {
      generateSparkles();
    }, 1000);

    // Clean up interval on component unmount
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="sparkling-text-container">
      <div className="sparkles">{sparkles}</div>
      <div className="text text-8xl">JISTECH2K24</div>
    </div>
  );
};

export default SparklingText;

// import { useState, useEffect } from "react";
import Hero from "./sections/Hero";
import RemainingPart from "./sections/remainingPart";
import Timeline from "./sections/Timeline";
function App() {
  // const [heroKey, setHeroKey] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setHeroKey((prevKey) => prevKey + 1);
  //   }, 5000);

  //   return () => clearInterval(interval);
  // }, []);

  return (
    <>
      <Hero />
      <RemainingPart />
      <Timeline/>
    </>
  );
}

export default App;

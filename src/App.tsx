import { useState, useEffect } from "react";
import Hero from "./sections/Hero";
import RemainingPart from "./sections/remainingPart";

function App() {
  const [heroKey, setHeroKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroKey((prevKey) => prevKey + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Hero key={heroKey} />
      <RemainingPart />
    </>
  );
}

export default App;

import Sparkle from "react-sparkle";

const HeroTitle = () => {
  return (
    <span className="text-center text-white font-bold text-8xl">
      <span>
        JISTECH
        <span className=" text-violet-500">2K24</span>
      </span>
      <div className="absolute top-0 left-0 h-screen w-full -z-10 ">
        <Sparkle color={"#FFF"} count={50} minSize={5} maxSize={10} fadeOutSpeed={10} flicker={false} />
      </div>
    </span>
  );
};

export default HeroTitle;

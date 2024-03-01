import CountdownTimer from "../components/CoutdownTimer";
import HeroTitle from "../components/HeroTitle";
import NewButton from "../components/NewButton";

const Hero=()=> {
  return (
    <section className="h-[75vh] w-full flex items-center justify-center flex-col">
      <div className="mb-10">
        {/* <SparklingText /> */}
        {/* <span className="text-center text-white font-bold text-8xl">
          <span>
            JISTECH
            <span className=" text-violet-500">2K24</span>
          </span>
        </span> */}
        <HeroTitle/>
        <div className="mt-10">
          <CountdownTimer />
        </div>
      </div>
      <NewButton buttonText="View More" />
    </section>
  );
}

export default Hero;

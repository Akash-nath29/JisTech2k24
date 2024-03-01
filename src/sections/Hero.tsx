import CountdownTimer from "../components/Hero/CoutdownTimer";
import HeroTitle from "../components/Hero/HeroTitle";
import NewButton from "../components/NewButton";
import PoweredBy from "../components/Hero/PoweredBy";

const Hero=()=> {

  return (
    <section className="h-[85vh] w-full flex items-center justify-center flex-col text-center select-none">
      <div className="mb-10">
        {/* <SparklingText /> */}
        {/* <span className="text-center text-white font-bold text-8xl">
          <span>
            JISTECH
            <span className=" text-violet-500">2K24</span>
          </span>
        </span> */}
        <HeroTitle/>
        <PoweredBy/>
        <div className="mt-10">
          <CountdownTimer />
        </div>
      </div>
      <NewButton buttonText="View More" />
    </section>
  );
}

export default Hero;

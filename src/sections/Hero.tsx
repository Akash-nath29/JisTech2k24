import CountdownTimer from "../components/CoutdownTimer";
import NewButton from "../components/NewButton";
import SparklingText from "../components/SparklingText";

function Hero() {
  return (
    <section className="h-[75vh] w-full flex items-center justify-center flex-col">
      <div className="mb-10">
        <SparklingText/>
        {/* <span className="text-center text-white font-bold text-8xl"></span> */}
        <div className="mt-10">
        <CountdownTimer/>
        </div>
      </div>
        <NewButton buttonText="View More"/>
    </section>
  );
}

export default Hero;

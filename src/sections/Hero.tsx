import NewButton from "../components/NewButton";

function Hero() {
  return (
    <section className="h-[75vh] w-full flex items-center justify-center flex-col">
      <div className="mb-10">
        <span className="text-center text-white font-bold text-8xl">JISTECH 2k24</span>
      </div>
        <NewButton buttonText="View More"/>
    </section>
  );
}

export default Hero;

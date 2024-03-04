import Events from "./Events";
import Timeline from "./Timeline";

function remainingPart() {
  return (
    <section className="flex items-center justify-center landscape:p-10 w-full h-auto" id="content">
      <div className=" landscape:rounded-3xl bg-gray-800 h-full w-full p-10">
        <Events/>
        <Timeline/>
      </div>
    </section>
  );
}

export default remainingPart;

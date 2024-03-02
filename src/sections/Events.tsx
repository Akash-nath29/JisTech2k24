// import CardSpotlightEffect from "../components/CardSpotlightEffect";
// import Skeleton from "react-loading-skeleton";
import { BackgroundGradient } from "../components/backGroundGradient";

const Events = () => {
  return (
    <div>
      <h1 className="text-4xl text-white text-center my-2">Featured Events</h1>
      <div className="grid grid-cols-3 gap-5 mt-5 portrait:grid-cols-1">
        {/* {Array.from({ length: 3 }).map((_, index) => (
          <CardSpotlightEffect key={index}>
            <div className='text-white font-bold text-3xl text-wrap h-60'>This is Event</div>
          </CardSpotlightEffect>
        ))}
        {Array.from({ length: 2 }).map((_, index) => (
          <CardSpotlightEffect key={index}>
            <div className="skeleton-card">
              <div className="skeleton-gradient" />
              <Skeleton height={150} width={200} />
              <Skeleton height={150} width={100} style={{ marginTop: "10px" }} />
              <Skeleton height={80} style={{ marginTop: "10px" }} />
            </div>
          </CardSpotlightEffect>
        ))} */}
        <BackgroundGradient className="rounded-[22px] max-w-full max-h-full min-h-full min-w-full  p-4 sm:p-10 bg-zinc-900">
          <p className="text-base sm:text-xl mt-4 mb-2 text-neutral-200">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi,
            esse. Aut
          </p>
          <p className="text-sm text-neutral-400">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Repudiandae cumque distinctio placeat nesciunt, fugit est totam!
            Non, exercitationem accusamus architecto alias natus quis blanditiis
            provident delectus culpa ea, asperiores cupiditate.
          </p>
          {/* <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
            <span>Buy now </span>
            <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
              $100
            </span>
          </button> */}
        </BackgroundGradient>
        <BackgroundGradient className="rounded-[22px] max-w-full max-h-full min-h-full min-w-full  p-4 sm:p-10 bg-zinc-900">
          <p className="text-base sm:text-xl mt-4 mb-2 text-neutral-200">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi,
            esse. Aut
          </p>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam eius
            repellendus architecto a ab in explicabo dolorum optio dolores,
            alias perspiciatis minus nostrum illo cupiditate adipisci neque
            omnis! Magnam, necessitatibus?
          </p>
          {/* <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
            <span>Buy now </span>
            <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
              $100
            </span>
          </button> */}
        </BackgroundGradient>
        <BackgroundGradient className="rounded-[22px] max-w-full max-h-full min-h-full min-w-full  p-4 sm:p-10 bg-zinc-900">
          <p className="text-base sm:text-xl mt-4 mb-2 text-neutral-200">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi,
            esse. Aut
          </p>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
            maiores dolorem consequuntur similique ducimus animi eum velit eaque
            eos nihil quaerat reiciendis, quam qui id vero sunt ab! A,
            similique. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          {/* <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
            <span>Buy now </span>
            <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
              $100
            </span>
          </button> */}
        </BackgroundGradient>
      </div>
    </div>
  );
};

export default Events;

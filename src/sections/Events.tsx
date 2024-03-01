import CardSpotlightEffect from '../components/CardSpotlightEffect';
import Skeleton from 'react-loading-skeleton';

const Events = () => {
  return (
    <div>
      <h1 className='text-3xl text-white'>Featured Events:</h1>
      <div className='grid grid-cols-3 gap-5 mt-5 portrait:grid-cols-1'>
        {Array.from({ length: 3 }).map((_, index) => (
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
        ))}
      </div>
    </div>
  );
};

export default Events;

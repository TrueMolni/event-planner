import { useNavigate } from 'react-router-dom';
import EventsItem from './EventsItem';

const EventsGrid = ({ list }) => {
  const navigate = useNavigate();

  const handleClick = id => {
    navigate(`/event/${id}`);
  };

  const elements = list?.map(
    ({ id, image, description, title, date, time, location }) => (
      <EventsItem
        key={id}
        img={image}
        text={description}
        title={title}
        onClick={() => handleClick(id)}
        date={date}
        time={time}
        place={location}
        itemClass=""
      />
    )
  );

  return (
    <div>
      <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {elements}
      </ul>
    </div>
  );
};

export default EventsGrid;

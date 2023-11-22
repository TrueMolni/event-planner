import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Info from 'components/Info';
import BackBtn from 'shared/components/BackBtn';
import { getEventById } from 'shared/data/events-api';

const AboutEventPage = () => {
  const [event, setEvent] = useState({});
  const { eventId } = useParams();

  const { image, description, title, date, time, location } = event;

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (eventId && !isNaN(Number(eventId))) {
          console.log('Fetching event with id:', eventId);
          const response = await getEventById(eventId);
          console.log(response);
          setEvent(response[0]);
        } else {
          console.error('Invalid eventId:', eventId);
        }
      } catch (error) {
        console.error('Error fetching events:', error.name);
      }
    };

    fetchData();
  }, [eventId]);

  return (
    <div>
      <BackBtn />
      <Info
        img={image}
        text={description}
        title={title}
        date={date}
        time={time}
        place={location}
      />
    </div>
  );
};

export default AboutEventPage;

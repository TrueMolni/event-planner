import { useState, useEffect } from 'react';

import EventsGrid from './EventsGrid';
import EventsNav from './EventsNav';

import { getAllEvents } from 'shared/data/events-api';

const Events = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await getAllEvents();

        setList(response);
      } catch (error) {
        console.error('Error fetching events:', error.name);
      }
    };
    fetchEvents();
  }, []);

  return (
    <div>
      <h1 className="visually-hidden">Events Page</h1>
      <EventsNav />
      <EventsGrid list={list} />
    </div>
  );
};

export default Events;

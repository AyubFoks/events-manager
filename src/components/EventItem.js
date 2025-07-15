import React from 'react';
import EventList from './components/EventList';
import EventForm from './components/EventForm';
import EventFilter from './components/EventFilter';

function EventItem({ event }) {
  return (
    <div className="event-item">
      <h2>{event.title}</h2>
      <p>{event.description}</p>
      <p>Date: {new Date(event.date).toLocaleDateString()}</p>
      <p>Location: {event.location}</p>
    </div>
  );
}

export default EventItem;
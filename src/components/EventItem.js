import EventItem from './EventItem';

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
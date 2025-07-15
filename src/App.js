import EventList from './components/EventList';
import EventForm from './components/EventForm';
import EventFilter from './components/EventFilter';
import React, { useState, useEffect } from 'react';
import { getEvents } from './services/api';

function App() {
  const [events, setEvents] = useState([]);

  // Fetch events from the server when the component mounts
  // This assumes you have a server running on http://localhost:3001/events
  // and that it returns a JSON array of events.
  
  useEffect(() => {
  getEvents()
    .then(data => setEvents(data))
    .catch(error => console.error("Fetch error:", error));
}, []);

  // Render the main application
  // This includes the header, welcome message, and the components for listing,
  // adding, and filtering events.
  // The components are expected to handle their own state and functionality.
  // The EventList component will display the list of events,
  // the EventForm component will allow users to add new events,
  // and the EventFilter component will provide options to filter the events.
  // The events state is passed down to the EventList component,
  // which will use it to render the list of events.
  return (
    <div className="App">
     <header>
      <h1>Events Manager</h1>
     </header>
     <p>
      Welcome to our event manager.
     </p>
     <EventList events={events} />
     <EventForm setEvents={setEvents} />
     <EventFilter events={events} setEvents={setEvents} />
    </div>
  );
}

export default App;

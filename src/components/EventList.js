import { useState, useEffect } from 'react';
import { getEvents } from '../services/api';
import EventForm from './components/EventForm';
import EventFilter from './components/EventFilter';

function List() {
  return (
    <div className="event-list">
      <h2>Event List</h2>
      {/* Event items will be rendered here */}
    </div>
  );
}

export default List;
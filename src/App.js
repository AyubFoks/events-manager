import logo from './logo.svg';
import './App.css';
import EventList from './components/EventList';
import EventForm from './components/EvenForm';
import EventFilter from './components/EventFilter';
import React from 'react';

function App() {
  return (
    <div className="App">
     <header>
      <h1>Events Manager</h1>
     </header>
     <p>
      Welcome to our event manager.
     </p>
     <EventList/>
     <EventForm/>
     <EventFilter/>
    </div>
  );
}

export default App;

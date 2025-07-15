import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
     <header>
      Events Manager
     </header>
     <p>
      Welcome to our event manager.
     </p>
    {/*Component	Purpose
App	Root component; holds main state (events array)
EventList	Renders all events; receives events as props
EventItem	Displays a single event + Edit/Delete buttons
EventForm	Form to create or edit events
EventFilter	(Optional) Filters or searches the events
Home	Page combining EventList, EventForm, and Filter*/}
    </div>
  );
}

export default App;

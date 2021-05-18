import React, {useState, useEffect} from "react";
import './App.css';

function App() {
  const [eventName, setEventName] = useState('');
  const [eventDescription, setEventDescription] = useState('');
  const [eventBooking, setEventBooking] = useState('');
  const [eventDateTime, setEventDateTime] = useState('');

  useEffect(() => {
    fetch('https://www.meetup.com/data-science-ODSC-Birmingham/')
    .then(res => res.json())
    .then(data => {
      setData(data)
      // console.log(data);
    })
  }, [])

  const setData = ({name, description, bookEvent, dateTimeOfEvent}) => {
    setEventName(name);
    setEventDescription(description);
    setEventBooking(bookEvent);
    setEventDateTime(dateTimeOfEvent);
  }

  return (
    <div className="App">
      <h1>Testing MeetUp API</h1>
    </div>
  );
}

export default App;

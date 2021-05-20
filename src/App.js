import React, {useState, useEffect} from "react";
import './App.css';

function App() {
  const [eventName, setEventName] = useState('');
  const [eventDescription, setEventDescription] = useState('');
  const [eventBooking, setEventBooking] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [eventStartTime, setEventStartTime] = useState('');
  const [eventEndTime, setEventEndTime] = useState('');

  useEffect(() => {
    fetch('https://www.meetup.com/data-science-ODSC-Birmingham/')
    .then(res => res.json())
    .then(data => {
      setData(data)
      // console.log(data);
    })
  }, []);

  const setData = ({ name, description, bookEvent, dateTimeOfEvent }) => {
    setEventName(name);
    setEventDescription(description);
    setEventBooking(bookEvent);
    setEventDate(eventDate);
    setEventStartTime(eventStartTime);
    setEventEndTime(eventEndTime);
  }

  return (
    <div className="App">
      <h1>Testing MeetUp API</h1>
      <hr />
      <h2>{eventName}</h2>
      <p>{eventDescription}</p>
      <a href="https://www.meetup.com/data-science-ODSC-Birmingham/">{eventBooking}</a>
      <h3>{eventDate}</h3>
      <h4>{eventStartTime}</h4>
      <h4>{eventEndTime}</h4>
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import './Bookevents.css';
const EventRequirementsForm = () => {
  const [eventName, setEventName] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [eventLocation, setEventLocation] = useState('');
  const [numberOfGuests, setNumberOfGuests] = useState('');
  const [eventType, setEventType] = useState('');
  const [additionalDetails, setAdditionalDetails] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here - You can send this data to a server or perform any necessary actions
    const eventData = {
      eventName,
      eventDate,
      eventLocation,
      numberOfGuests,
      eventType,
      additionalDetails,
    };
    console.log('Submitted Data:', eventData);
    // Reset form fields after submission
    setEventName('');
    setEventDate('');
    setEventLocation('');
    setNumberOfGuests('');
    setEventType('');
    setAdditionalDetails('');
  };

  return (
    <div className='son'>
      <div className="headerrr">
                <div className = "textyyy"> Zero Degree Event Planning and Decor </div>
                <div className = "underlineee"></div>
            </div>
      <div className='sss'>
      <form className="f" onSubmit={handleSubmit}>
        <label className='lll'>
          Event Name:
          <input className='iii'
            type="text"
            value={eventName}
            onChange={(e) => setEventName(e.target.value)}
            required
          />
        </label>
        <label className='lll'>
          Event Date:
          <input className='iii'
            type="date"
            value={eventDate}
            onChange={(e) => setEventDate(e.target.value)}
            required
          />
        </label>
        <label className='lll'>
          Event Location:
          <input className='iii'
            type="text"
            value={eventLocation}
            onChange={(e) => setEventLocation(e.target.value)}
            required
          />
        </label>
        <label className='lll'>
          Number of Guests:
          <input className='iii'
            type="number"
            value={numberOfGuests}
            onChange={(e) => setNumberOfGuests(e.target.value)}
            required
          />
        </label>
        <label className='lll'>
          Event Type:
          <select className ='se' value={eventType} onChange={(e) => setEventType(e.target.value)} required>
            <option value="">Select</option>
            <option value="Wedding">Wedding</option>
            <option value="Birthday">Birthday</option>
            <option value="Corporate">Corporate</option>
            {/* Add more event types */}
          </select>
        </label>
        <label className='lll'>
          Additional Details:
          <textarea className='te'
            value={additionalDetails}
            onChange={(e) => setAdditionalDetails(e.target.value)}
          ></textarea>
        </label>
        <button className='bbbb' type="submit">Submit</button><br></br><br></br>
      </form>
      </div>
    </div>
  );
};

export default EventRequirementsForm;
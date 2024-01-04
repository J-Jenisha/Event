import React, { useState } from 'react';
import './Bookevents.css';
import { Link } from 'react-router-dom';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CakeIcon from '@mui/icons-material/Cake';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import NightlifeIcon from '@mui/icons-material/Nightlife';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
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
       <div className='pay'>
                <div className='flex'>
                 <img src="imge/chair.jpg"/>
                </div>
                <div className='flex'>
                <img src="imge/party.jpg"/>
                </div>
                <div className='flex'>
                  <img src="imge/dj.jpg"/>
                </div>
                <div className='flex'>
                  <img src="imge/marr.jpg"/>
                </div>
        </div>
            
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
            <option value="Engagement">Engagement</option>
            <option value="Housewarming">Housewarming</option>
            <option value="Gettogrther">Get Together</option>
            <option value="Annivesary">Annivesary</option>
            <option value="AwardCeremony">Award Ceremony</option>
            <option value="School">School/College Events</option>
            <option value="OtherFamily Function">Other Family Function</option>
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
        <button className='bbbb' type="submit"><Link className="linkks" to="/thankyou">Submit</Link></button><br></br><br></br>
      </form>
      </div>
      <div>
        <p className='cus'>CUSTOMISED EVENT DECOR SERVICES</p>
        <p className='cust'>How to Plan Your Wedding with Bamboo Events?</p>
      </div>
      <div className='soon'>
        <div className='man'>
        <RestaurantIcon id="she" />
        <h4 className='hels'>catering services</h4>
        </div>
        <div className='man'>
        <CalendarMonthIcon id="she" />
        <h4 className='hels'>Wedding Events</h4>
        </div>
        <div className='man'>
        <CakeIcon id="she" />
        <h4 className='hels'>Bithday/Wedding Cakes</h4>
        </div>
        <div className='man'>
        <AddAPhotoIcon id="she" />
        <h4 className='hels'>Photographers</h4>
        </div>
        <div className='man'>
        <CardGiftcardIcon id="she" />
        <h4 className='hels'>Gifts/Goody Bags</h4>
        </div>
        <div className='man'>
        <NightlifeIcon id="she" />
        <h4 className='hels'>Dj & Lighting</h4>
        </div>
        <div className='man'>
        <DirectionsCarIcon id="she" />
        <h4 className='hels'>Vehicle Arrangement  </h4>
        </div>
        <div className='man'>
        <AutoFixHighIcon id="she" />
        <h4 className='hels'>Magic Show</h4>
        </div>
        
        

        
        
        </div>
      </div>
    
  );
};

export default EventRequirementsForm;

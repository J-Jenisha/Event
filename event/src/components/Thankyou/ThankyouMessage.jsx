import React from 'react';
import './ThankyouMessage.css'; // Import CSS file for styles
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
class ThankyouMessage extends React.Component {
  render() {
    return (
        <div>
      <div className="thank-you-container">
        <h2 className="thank-you-heading">Thank you for booking the event!</h2>
        <p className="thank-you-text">We are thrilled to have you join us. Looking forward to seeing you there!</p>
        <p className="greeting-message">Let's make this event more special memorable!</p>
      <div className='soonn'>
        <div className='man'>
        
        <h4 className='hels'><LocationOnIcon className='add'/> Address</h4>
        <p>No.2, Ground floor,D.J.Nagar,Hopescollage,</p>
        <p>Near Water Tank,Coimbatore-641 004.</p>
        </div>
        <div className='man'>
        
        <h4 className='hels'><EmailIcon className='add'/> E-Mail</h4>
        <p>info@zerodegreeevents.co.in</p>

        <p>enquiry@zerodegreeevents.co.in</p>
        </div>
        <div className='man'>
        
        <h4 className='hels'><AddIcCallIcon className='add'/> Contact</h4>
        <p>+91 99949 24984</p>
        <p>+91 90800 93427</p>
        </div>
        </div>
        
      <div className='pays'>
      <div className='flexx'>
        <img src="imge/chair.jpg"/>
      </div>
      <div className='flexx'>
        <img src="imge/party.jpg"/>
      </div>
      <div className='flex'>
        <img src="s3.jpg"/>
      </div>
      <div className='flexx'>
        <img src="s2.jpg"/>
      </div>
      <div className='flexx'>
        <img src="s1.jpg"/>
      </div>
      </div>
      </div>
      </div>
    );
  }
}

export default ThankyouMessage;

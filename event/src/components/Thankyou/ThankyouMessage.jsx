import React from 'react';
import './ThankyouMessage.css'; // Import CSS file for styles

class ThankyouMessage extends React.Component {
  render() {
    return (
        // <div>
      <div className="thank-you-container">
        <h2 className="thank-you-heading">Thank you for booking the event!</h2>
        <p className="thank-you-text">We are thrilled to have you join us. Looking forward to seeing you there!</p>
        <p className="greeting-message">Let's make this event more special memorable!</p>
      {/* </div> */}
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
    );
  }
}

export default ThankyouMessage;

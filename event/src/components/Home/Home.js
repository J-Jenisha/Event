import React from 'react';
import './Home.css';
import EventSection from './EventSection';

import chair from '../images/chair.jpg';
import chairs from '../images/chairs.jpg';
import color from '../images/color.jpg';
import hbd from '../images/hbd.jpg';
import peach from '../images/peach.jpg';
import happy from '../images/happy.jpg';
import award1 from '../images/award1.jpg';
import award2 from '../images/award2.jpg';
import award3 from '../images/award3.jpg';
import childs from '../images/childs.jpg';
import get2 from '../images/get2.jpg';
import get1 from '../images/get1.jpg';

// Define the background image style
const backgroundImageStyle = {
  backgroundImage: `url('imge/marr.jpg')`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  marginTop:'120px',
  height: '100vh',
  // filter: 'blur(1px)',
};

const Home = () => {
  return (
    <div className='hme'>
      
      <div className="background-image" style={backgroundImageStyle}>
      
        <h3>Zero Degree Event Planning and decor</h3>
        <center><p className='py'><b className='jey'>"Every event comes once in our life so they give us very precious memories to cherish for a life time."</b></p></center>
        <center><p className='py'><b className='jey'>" Let us make them extraordinary with Coimbatore Event Management."</b></p></center>
      </div>

      {/* Wedding Events */}
      <EventSection
        title="Wedding Events"
        images={[chair, color, chairs]}
      />

      {/* Birthday Events */}
      <EventSection
        title="Birthday Events"
        images={[happy, hbd, peach]}
      />

      {/* Get Together Events */}
      <EventSection
        title="Get Together Events"
        images={[get2, childs, get1]}
      />

      {/* Award Ceremony Events */}
      <EventSection
        title="Award Ceremony Events"
        images={[award2, award1, award3]}
      />
    </div>
  );
};

export default Home;

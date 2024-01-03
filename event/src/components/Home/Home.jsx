import React from 'react';
import './Home.css';
import marr from '../images/marr.jpg'
import chair from '../images/chair.jpg'
import chairs from '../images/chairs.jpg'
import color from '../images/color.jpg'
import hbd from '../images/hbd.jpg'
import peach from '../images/peach.jpg'
import happy from '../images/happy.jpg'
import award1 from '../images/award1.jpg'
import award2 from '../images/award2.jpg'
import award3 from '../images/award3.jpg'
import childs from '../images/childs.jpg'
import get2 from '../images/get2.jpg'
import get1 from '../images/get1.jpg'
const Home = () =>{
    return(
        <div className='hme'>
            <center><h2>Zero Degree Event Planning and Decor</h2></center>
            <img src={marr} alt="h1" width="100%"height = "30%"/>
            <br></br><br></br><br></br><br></br>
            <center><h2 className='hme'>-----Services Provided From Zero Degree-----</h2></center>
            <br></br>
            <br></br>
            <center><h2 className='abt1'>Wedding Events</h2></center><br></br>
            <div className = "underline"></div>
            <img src={chair} alt="h1" width="33%"height = "50%"/>
            <img src={color} alt="h1" width="33%"height = "50%"/>
            <img src={chairs} alt="h1" width="33%"height = "50%"/>
            <br></br>
            <br></br>
            <center><h2 className='abt1'>BirthDay Events</h2></center><br></br>
            <img src={happy} alt="h1" width="33%"height = "50%"/>
            <img src={hbd} alt="h1" width="33%"height = "50%"/>
            <img src={peach} alt="h1" width="33%"height = "50%"/>
            <br></br>
            <br></br>
            <center><h2 className='abt1'>Get Together Events</h2></center><br></br>
            <img src={get2} alt="h1" width="33%"height = "50%"/>
            <img src={childs} alt="h1" width="33%"height = "50%"/>
            <img src={get1} alt="h1" width="33%"height = "50%"/>
            <br></br>
            <br></br>
            <center><h2 className='abt1'>Award Ceremony Event </h2></center><br></br>
            <img src={award2} alt="h1" width="33%"height = "50%"/>
            <img src={award1} alt="h1" width="33%"height = "50%"/>
            <img src={award3} alt="h1" width="33%"height = "50%"/>
            <br></br>
        </div>
    );
}

export default Home;
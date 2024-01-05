import React from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom';
import logo from '../images/zlogo.jpg';

const Navbar=()=>
{
    return(
      <>
      <nav>
        <div classname='navbar'>
            <ul className='ul'>
                <img className="logo" src={logo} alt="h1"/>
                <li className='lin'><Link className="links" to="/">Home</Link></li>
                <li className='lin'><Link className="links" to="/cart">About Us</Link></li>
                <li className='lin'><Link className="links" to="/manage">Events</Link></li>
                <li className='lin'><Link className="links" to="/whatwedo">What We Do</Link></li>
                <li className='lin'><Link className="links" to="/bookevents">Book Event</Link></li>
                <button className='btn'><Link className="link" to="/login">Login</Link></button>
                <button className='btn'><Link className="link" to="/signup">Signup</Link></button>
                
            </ul>
        </div>
        </nav>
        </>

    );
}

export default Navbar;
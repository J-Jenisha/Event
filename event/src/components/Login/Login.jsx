import React from 'react';
import './Login.css';


import email_icon from '../images/Email.png'
import password_icon from '../images/password.png'


const Login = () =>{

    
    return(
        <div className="back">
        <div className='container'>
            <div className="header">
                <div className = "texty"> Login </div>
                <div className = "underline"></div>
            </div>
            <div className = "inputs">
                <div className="input">
                <img src={email_icon} alt="user" height="30" width="30"/>
                    <input type = "email" placeholder="Email Id"/>
                </div>
            
            
                <div className="input">
                <img src={password_icon} alt="user" height="30" width="30"/>
                    <input type = "password" placeholder="Password"/>
                </div>
            
            </div>
            <div className = "forgot-password"><span>Forgot Password? </span></div>
            
            <div className = "submit-container">
                
                <div className = "submit"><a href="http://localhost:3000/whatwedo">Login</a></div>
            </div>
        </div>
        </div>
    );
};

export default Login;

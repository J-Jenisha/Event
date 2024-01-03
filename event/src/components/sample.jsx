import React from 'react';

const Signup = () =>{

    
    return(
        <div className='container'>
            <div className="header">
                <div className = "text"> SignUp </div>
                <div className = "underline"></div>
            </div>
            <div className = "inputs">
                <div className="input">
                    
                    <input type = "text" placeholder="Name"/>
                </div>
                
            
                <div className="input">
                    
                    <input type = "email" placeholder="Email Id"/>
                </div>
            
            
                <div className="input">
                    
                    <input type = "password" placeholder="Password"/>
                </div>
            
            </div>
            
            <div className = "submit-container">
                <div className = "submit">Sign Up</div>
                
            </div>
        </div>
    );
};

export default Signup;


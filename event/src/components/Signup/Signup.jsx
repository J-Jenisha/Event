import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import './Signup.css';
import { useNavigate } from 'react-router-dom';
import user_icon from '../images/person.png';
import email_icon from '../images/Email.png';
import password_icon from '../images/password.png';
const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
 const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form validation here before submission
    if (formData.name.trim() === '' || formData.email.trim() === '' || formData.password.trim() === '') {
      alert('Please fill in all fields.');
      return;
    }
    // Additional validation logic can be added here (e.g., email format, password strength)
    console.log('Form submitted:', formData);
    // Clear form fields after submission
    setFormData({
      name: '',
      email: '',
      password: '',
    });
    navigate('/');
  };

  return (
    <div className="back">
      <div className="container">
        <div className="header">
          <div className="texty"> SignUp </div>
          <div className="underline"></div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="inputs">
            <div className="input">
              <img src={user_icon} alt="user" height="30" width="30" />
              <input
                type="text"
                placeholder="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className="input">
              <img src={email_icon} alt="email" height="30" width="30" />
              <input
                type="email"
                placeholder="Email Id"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="input">
              <img src={password_icon} alt="password" height="30" width="30" />
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="submit-container">
            <div >
              <button type="submit" className="submit"><Link className="linkks" to="/">Sign Up</Link></button>
              </div>
              </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;

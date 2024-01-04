
import React, { useState } from 'react';
import './Login.css';

import email_icon from '../images/Email.png';
import password_icon from '../images/password.png';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [formErrors, setFormErrors] = useState({});
  const navigate = useNavigate();
  const validateForm = () => {
    let errors = {};
    let formIsValid = true;

    // Email validation
    if (!formData.email.trim()) {
      formIsValid = false;
      errors.email = 'Email is required';
    } else {
      // Regular expression for basic email validation
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(formData.email)) {
        formIsValid = false;
        errors.email = 'Please enter a valid email';
      }
    }

    // Password validation
    if (!formData.password.trim()) {
      formIsValid = false;
      errors.password = 'Password is required';
    }

    setFormErrors(errors);
    return formIsValid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Perform further actions like submitting form data to the server
      console.log('Form submitted:', formData);
      // Clear form fields after submission
      setFormData({
        email: '',
        password: '',
      });
      navigate('/');
    }
  };

  return (
    <div className="back">
      <div className="container">
        <div className="header">
          <div className="texty"> Login </div>
          <div className="underline"></div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="inputs">
            <div className="input">
              <img src={email_icon} alt="user" height="30" width="30" />
              <input
                type="email"
                placeholder="Email Id"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              {formErrors.email && <span className="error">{formErrors.email}</span>}
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
              {formErrors.password && <span className="error">{formErrors.password}</span>}
            </div>
          </div>

          <div className="forgot-password"><span>Forgot Password? </span></div>

          <div className="submit-container">
            <div >
              <button type="submit" className="submit">Login</button>
              </div>
              </div>
        </form>
      </div>
    </div>
  );
};

export default Login;


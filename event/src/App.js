import React from 'react';

import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Whatwedo from './components/WhatWeDo/Whatwedo';
import Terms from './components/Pages/Terms';
import Privacy from './components/Pages/Privacy';
import EventRequirementsForm from './components/Events/Bookevents';
import Cart from './components/Cart/Cart';
import Payment from './components/Payment/Payment';
import ThankYouMessage from './components/Thankyou/ThankyouMessage';
import Main from './components/manage/Manage';
function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/about' element={<About/>}/>
        <Route exact path='/whatwedo' element={<Whatwedo/>}/>
        <Route exact path='/bookevents' element={<EventRequirementsForm/>}/>
        <Route exact path='/login' element={<Login/>}/>
        <Route exact path='/signup' element={<Signup/>}/>
        <Route exact path='/terms' element={<Terms/>} />
        <Route exact path='/privacy' element={<Privacy/>} />
        <Route exact path='/cart' element={<Cart/>} />
        <Route exact path='/payment' element={<Payment/>} />
        <Route exact path='/thankyou' element={<ThankYouMessage/>} />
        <Route exact path='/manage' element={<Main/>}/> 
        
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;

import React from 'react';

import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Whatwedo from './components/WhatWeDo/Whatwedo';
import Wedding from './components/Pages/Wedding';
import School from './components/Pages/School';
import Housewarming from './components/Pages/Housewarming';
import Familyfunction from './components/Pages/Familyfunction';
import Gettogether from './components/Pages/Gettogether';
import Engagement from './components/Pages/Engagement';
import Company from './components/Pages/Company';
import Corporate from './components/Pages/Corporate';
import Birthday from './components/Pages/Birthday';
import Annivesary from './components/Pages/Annivesary';
import Terms from './components/Pages/Terms';
import Privacy from './components/Pages/Privacy';
import FAQ from './components/Pages/FAQ';
import EventRequirementsForm from './components/Events/Bookevents';
import Cart from './components/Cart/Cart';
import Payment from './components/Payment/Payment';
import ThankYouMessage from './components/Thankyou/ThankyouMessage';
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
        <Route exact path='/wedding' element={<Wedding/>} />
        <Route exact path='/engagement' element={<Engagement/>} />
        <Route exact path='/housewarming' element={<Housewarming/>} />
        <Route exact path='/gettogether' element={<Gettogether/>} />
        <Route exact path='/familyfunction' element={<Familyfunction/>} />
        <Route exact path='/corporate' element={<Corporate/>} />
        <Route exact path='/awardfunction' element={<Company/>} />
        <Route exact path='/birthdays' element={<Birthday/>} />
        <Route exact path='/school' element={<School/>} />
        <Route exact path='/annivesary' element={<Annivesary/>} />
        <Route exact path='/terms' element={<Terms/>} />
        <Route exact path='/privacy' element={<Privacy/>} />
        <Route exact path='/faq' element={<FAQ/>} />
        <Route exact path='/cart' element={<Cart/>} />
        <Route exact path='/payment' element={<Payment/>} />
        <Route exact path='/thankyou' element={<ThankYouMessage/>} />
        
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;

// Navbar.js
import React from 'react';

import logo from '../Assets/logo.png';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';
import Section5 from './Section5';
import Section6 from './Section6';
import Section8 from './Section8';
import Section9 from './Section9';
import Footer from './Footer';



function Navbar() {
  return (
    <div className="parent ">
<div class="container-fluid containers w-100">
    <nav className="navbar">
      <div className="logo">
      <img className='logo w-75' src={logo} alt="Logo" /> {/* Add alt text for accessibility */}
      </div>
      <ul className="nav-list d-flex  gap-4 list-unstyled w-25">
        <li>HOME</li>
        <li>PROFILE</li>
        <li>REPORT</li>
        <li>INSIGHT</li>
      </ul>
      <div className="nav-buttons d-flex gap-3">
      <button type="button" class="btn  btn-transperent border-black p-2 ">LOGIN</button>
       <button type="button" class="btn btn-transperent border-black">GET STARTED</button>
      </div>
    </nav>
    </div>
    <Section1/>
    <Section2/>
    <Section3/>
    <Section4/>
    <Section5/>
    <Section6/>
    <Section8/>
    <Section9/>
    <Footer/>
    </div>
   
  );
}

export default Navbar;

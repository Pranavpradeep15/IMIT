import React from 'react'
import logo from '../Assets/logo.png';
import { FaFacebookF} from "react-icons/fa";
import { FaInstagram  } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <div className='fotter-full'>
        <div className='logo-and3'>
        <div className='logo'>
        <img className='logo w-75 ms-5' src={logo} alt="Logo" />
        </div>
        <div className='nav-list'>
            <ul>
                <li>HOME</li>
                <li>PROFILE</li>
                <li>REPORT</li>
                <li>INSIGHT</li>
            </ul>
        </div>
        <div className='info-list'>
            <ul>
                <li>INFORMATION CENTRE</li>
                <li>TERMS & CONDITIONS</li>
                <li>PRIVACY POLICY</li>
            </ul>
        </div>
        </div>
        <div className='full-icons'>
            <div className='socialmedias'>
             <div><FaFacebookF /></div>
             <div><FaInstagram /></div>
             <div><FaTwitter /></div>
             <div><FaLinkedinIn /></div>
            </div>
            <div className='2022'>
                <p>©️2022 Weather Properties</p>
            </div>
        </div>
    </div>
  )
}

export default Footer

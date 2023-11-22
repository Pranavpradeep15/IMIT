import React from 'react'
import commonimage from '../Assets/commonimage.png';
import Image7 from '../Assets/Image7.png';

function Section7() {
  return (
    <div >
       <div className="main d-flex ">

       <div className="imagess d-flex">
        <img src= {Image7} className='relative position-absolute z-1' alt="" />
        <img src= {commonimage} className='absolute position-relative' alt="" />
        
        </div>
   <div className='head ms-5 mt-5 '>
   
   <h1>Create Attractive Profiles</h1>
   <div>
   <h2 >
  Interior brings 41 years of interior designs experience
  right to your home or office. Our design professionals
  are equipped to help you determine the products and
  design that work best for our customers.
</h2>
   </div>



<ul>
  <li>Create folders and files</li>
  <li>Set up an internet connection</li>
  <li>Connect your computer</li>
  <li>Navigate all of the programs</li>
  <li>Operating system</li>
</ul>
          <button type="button" class="btn btn-primary colourbtn">GET STARTED</button>

        </div>
      

     

       
       
        </div>
    </div>
  )
}

export default Section7

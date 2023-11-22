import React from 'react'
import Image1 from '../Assets/Image1.png';
import Image11 from '../Assets/Image11.png';


function Section1() {
  return (
    
    <div className="main d-flex justify-content-around">
   <div className='head ms-5 mt-5'>
   
          <h1 className='headings'>
                BUY YOUR <br />
                <div className='dreamhome'>
                DREAM HOME <br />
                </div>
             
                IN KYIV!
          </h1>
          <button type="button" class="btn btn-primary firstbutton">GET STARTED</button>

        </div>
        <div className="imagess d-flex">
        <img src= {Image1} className='relative position-absolute z-1' alt="" />
        <img src= {Image11} className='absolute position-relative' alt="" />
        
        </div>

     

       
       
        </div>
        
        
  )
}

export default Section1

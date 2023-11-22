import React from 'react'
import Image9 from '../Assets/Image9.png';

function Section9() {
  return (
    <div className='fullmain d-flex'>
      <div className='boysit'>
      <img src={Image9} alt="" />
      </div>
      <div className='sec9-3 d-flex-column gap-5 '>
        <div className='buyer'>
            <h1>
            Let Us Help You Find Your Ideal Buyer!
            </h1>
        </div>
        <div>
            <p>
            Interior brings 41 years of interior designs experience 
right to your home or office.Our design professionals
are equipped to help you determine the products and
design that work best for our customers.

            </p>
        </div>
        <div>
        <button type="button" class="btn btn-secondary custom-width ">REGISTER NOW</button>
        </div>
      </div>
    </div>
  )
}

export default Section9

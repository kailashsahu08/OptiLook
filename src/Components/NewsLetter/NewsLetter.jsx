import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
  return (
    <center>
        <div className='newsLetter'>
            <h1>Get Exclusive Offer On Your Email</h1>
            <p>Subscribe to our newsletter and stay updated</p>
            <div>
                <input type="email" name="" id="" placeholder='Your Email Id' />
                <button>Subscribe</button>
            </div>
        </div>
    </center>
  )
}

export default NewsLetter
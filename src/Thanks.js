import React from 'react'
import './index.css';
import illustration from "./images/illustration-thank-you.svg";

export default function Thanks({rating}) {
  return (
    <div id="thank-state" className="card"> 
        <img src={illustration} alt="" />
        <p id="result">You selected {rating} out of 5</p>

        <h1>Thank you!</h1>

        <p>We appreciate you taking the time to give a rating. If you ever need more support, 
        don’t hesitate to get in touch!</p>
    </div>
  )
}

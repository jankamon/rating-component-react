import React from 'react'
import './index.css';
import star from "./images/icon-star.svg";

export default function Rate() {
  return (
    <div id="rating-state" class="card">
        <img class="circle" src={star} />
        <h1>How did we do?</h1>

        <p>Please let us know how we did with your support request. All feedback is appreciated 
        to help us improve our offering!</p>
        
        <ul id="rating-ul">
        <li><button class="radio-button circle">1</button></li>
        <li><button class="radio-button circle">2</button></li>
        <li><button class="radio-button circle">3</button></li>
        <li><button class="radio-button circle">4</button></li>
        <li><button class="radio-button circle">5</button></li>
        </ul>
        <button id="submit-button" type="submit">Submit</button>
    </div>
  )
}

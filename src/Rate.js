import React, {useState} from 'react'
import './index.css';
import star from "./images/icon-star.svg";

const ratings = [1, 2, 3, 4, 5];


export default function Rate({getRating, changeSubmit}) {

  return (
    <div id="rating-state" className="card">
        <img className="circle" src={star} />
        <h1>How did we do?</h1>

        <p>Please let us know how we did with your support request. All feedback is appreciated 
        to help us improve our offering!</p>
        
        <ul id="rating-ul">
          {ratings.map((item) => {
              return <li key={item}><button className="radio-button circle" onClick={getRating}>{item}</button></li>
          })}
        </ul>
        <button id="submit-button" type="submit" onClick={changeSubmit}>Submit</button>
    </div>
  )
}

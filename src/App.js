import React, { useState } from 'react';
import Rate from './Rate.js';
import Thanks from './Thanks.js';
import './index.css';

function App() {

  const [rating, setRating] = useState('');

  const getRating = (event) => {
      setRating(event.target.innerHTML)
  }

  const [submitStatus, setSubmitStatus] = useState(false);

  const changeSubmit = () => {
    setSubmitStatus(true);
  }

  return (
    <main>
      {!submitStatus ? <Rate getRating={getRating} changeSubmit={changeSubmit}/> : <Thanks  rating={rating}/>}
    </main>
    
  );
}

export default App;

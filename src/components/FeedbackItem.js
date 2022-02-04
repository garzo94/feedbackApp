import {React, useState} from 'react';


function FeedbackItem() {

   
  const [rating, setRating] = useState(1)
  const [text, setText] = useState('this is an exampel of feedback')
  function handleBtn(){
      setRating(10)
  }
  return (
    <div className='card'>
        <div className='num-display'>{rating}</div>
        <div className='text-display'>
        {text}
        </div>
        <button onClick={handleBtn}>Click</button>
     
    </div>)
}

export default FeedbackItem;

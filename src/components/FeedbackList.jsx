import React from 'react'
import FeedbackItem from './FeedbackItem';


function FeedbackList({feedback, onDelete}) {
    // if  (!feedback || feedback.length === 0) {
    //     return <p>No feedback yet</p>;
    //   }
  return (
    <div className='feedback-list'>
      {feedback.map((item)=> (
       <FeedbackItem key={item.id} item={item} onDelete={onDelete}/>
      ))}
      {feedback.length > 0 || <p>No feedback yet</p>}
    </div>
  )
}

export default FeedbackList

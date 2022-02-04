import FeedbackItem from './FeedbackItem'

function feedbackList({feedback, handleDelete}) {
    
 if (!feedback || feedback.lenght === 0){
     return <p> No feedback Yet </p>
 }


  return (
      <div className='feedback-list'>
          {feedback.map((item) => (
              <FeedbackItem 
              key={item.id} 
              item={item} 
              handleDelete={handleDelete}
              />
          )
          )}
      </div>
  )
  
}

export default feedbackList;

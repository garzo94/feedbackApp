import {createContext, useState} from 'react'
import {v4 as uuidv4} from 'uuid' 


const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {
    const [feedback, setFeedback] = useState([
        {
            id:1,
            text: 'This item is from context id 1',
            rating:10
        },
        {
            id:2,
            text: 'This item is from context id 2',
            rating:8
        },
        {
            id:3,
            text: 'This item is from context id 3',
            rating:10
        },
    ])

    const [feedbackEdit, setFeedbackEdit] = useState({
        item:{},
        edit: false
    })

    const deleteFeedback = (id) => {
        if (window.confirm('Are you sure you want to delete it?')){
            setFeedback(feedback.filter((item) => item.id !== id))
        }
    }

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
       setFeedback(prev => {
           return [newFeedback,...prev ]
       } )
    }
// DELETE
    const editFeedback = (item) => {
        setFeedbackEdit(
          {
              item: item,
              edit: true
          }
        )

    }
    
    // UPDATE
    const updateFeedback = (id, updItem) => {
        setFeedback(feedback.map((item) => (item.id ===id ? {...item, ...updItem} : item)))
        setFeedbackEdit({   
            item:{},
            edit: false
        })
        console.log(feedback)
    }
    

    return (
    <FeedbackContext.Provider value ={{
            feedbackEdit,
             feedback,
             deleteFeedback,
             addFeedback,
             editFeedback,
             updateFeedback,
             setFeedbackEdit,
            
    }}>
        {children}
    </FeedbackContext.Provider>)
}

export default FeedbackContext
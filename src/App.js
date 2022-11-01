import { v4 as uuidv4} from 'uuid'
import { useState } from "react"
import Header from "./components/Header"
import FeedbackList from './components/FeedbackList'
import FeedbackStats from "./components/FeedbackStats"
import FeedbackForm from "./components/FeedbackForm"
import FeedbackData from "./data/FeedbackData"
 
 
function App() {
  const [feedback, setFeedback] = useState
  (FeedbackData)
 
    const addFeedback = (newFeedback) => {
      newFeedback.id = uuidv4()
      setFeedback([newFeedback, ...feedback])
 
    }
 
    const deleteFeedback = (id) => {
      if (window.confirm('Are you sure you want to delete')){
        setFeedback(feedback.filter((item) => item.id !== id))
           //filter will return the feedbacks except we wanted to delete and the new state will be the feedbacks
      //minus the feedback we wanted to delete
      }
    }
  return (
    <>
    <Header />
    <div className='container'>
      <FeedbackForm handleAdd={addFeedback} />
      <FeedbackStats feedback={feedback} />
      <FeedbackList feedback={feedback} 
      handleDelete={deleteFeedback}/> 
           
      </div>
      </>
  )
}
 
export default App
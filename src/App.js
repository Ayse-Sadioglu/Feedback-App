import Header from "./components/Header";
import { useState } from "react";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./data/FeedbackData";

function App() {
  const [feedback, setFeedBack] = useState(FeedbackData);


const deleteFeedback=(id)=>{
  if(window.confirm('Are you sur you want to delete?')){
    setFeedBack(feedback.filter((items)=>items.id !==id))
    //filter will return the feedbacks except we wanted to delete and the new state will be the feedbacks
    //minus the feedback we wanted to delete

  }
 


}
  return (
    <>
      <Header />
      <div className="container">
        <FeedbackList  feedback={feedback}
        handleDelete={deleteFeedback}

        />
       
       
      </div>
    </>
  );
}
export default App;

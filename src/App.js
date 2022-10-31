import Header from "./components/Header";
import FeedbackItem from "./components/FeedbackItem";
import {useState} from 'react'



function App() {

  const [feedback,setFeedBack]=useState(

   
      {
        id: 1,
        rating: 10,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.',
      },
      {
        id: 2,
        rating: 9,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.',
      },
      {
        id: 3,
        rating: 8,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.',
      },
    
  )
 return ( 
 
 <>
  <Header />
  <div className="container">
   <FeedbackItem/>
  </div>
</>)
   
  
}
export default App;
 
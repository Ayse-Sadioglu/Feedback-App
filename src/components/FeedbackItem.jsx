import Card from "./shared/Card";
import PropTypes from 'prop-types'
import { FaTimes } from 'react-icons/fa'



function FeedbackItem({ item , handleDelete}) {



  return (
    <Card>
      <div className="num-display"> {item.rating}</div>
      <button onClick={()=>handleDelete(item.id)} className="close">//filter will return the feedbacks except we wanted to delete and the new state will be the feedbacks
      //minus the feedback we wanted to delete
        <FaTimes color='purple'/>
      </button>


      <div className="text-display"> {item.text}</div>
    </Card>
  );
}

FeedbackItem.propTypes={

  item:PropTypes.object.isRequired,

}

export default FeedbackItem

import React, {useState} from 'react'; 
import StarRating from "./StarRating"




const ReviewForm = (props) => {
    const [name, setName] = useState('')
    const [comment, setComment] = useState('')
    const [rating, setRating] = useState('')

 
    function submitReview(){
        const obj = {
            name: name,
            comment: comment,
            rating: rating,
        }
        props.setReview(obj)
    }

    
    return (
      
     <div className="mainform" >
        <div className="form-group w-25" >
            <label >Name</label>
            <input placeholder="Name" onChange={(event) =>  setName(event.target.value) } /> 
        </div>
        <StarRating setRating={setRating}/>
        <div className="form-group">
            <label >Write Your Review Here</label>
            <textarea className="form-control" rows="3" onChange={(event) =>  setComment(event.target.value) } ></textarea>
        </div>
        <button  className="btn btn-primary" onClick={submitReview}  >Submit</button>
     </div>
    )
}

export default ReviewForm

import React, {useState} from "react";


const StarRating = (props) =>{
   
     
    const handleType = (event) =>{
        props.setRating(event.target.value)
    }

    return(
        <div className="form-group w-25" >
            <label>Rating</label>
            <input placeholder="Rating" onChange={handleType} /> 
        </div>
    )
}

export default StarRating
import React from 'react'
import PropTypes from 'prop-types'

const Review = props => {
    return (
        <div className="movieReview">
            <div className="reviewInfo">
                <div className="reviewname">Name:{props.review.name}</div>
                <div className="reviewrating">Rating:{props.review.rating}</div> 
            </div>
            <div className="reviewComment" >Review:{props.review.comment}</div>
        
        </div>
    )
}
const ReviewList = props => {
    console.log(props.reviews)
    return(
        <div className="moviereviewlist">
            {props.reviews.map(r => {
              return(
                  <Review  key={r.name}review={r}/>
              )  
            })}
        </div>
    )
}

ReviewList.propTypes = {

}

export default ReviewList

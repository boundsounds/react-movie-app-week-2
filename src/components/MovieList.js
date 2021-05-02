import PropTypes from 'prop-types'
import Moviedata from './Moviedata'
import ReviewForm from './ReviewForm'
import ReviewList from './ReviewList'
import StarRating from './StarRating'

let movieReviews = [];

const MovieList = props => {
    return (
        <div>
           <Moviedata/> 
           <StarRating />
           <ReviewForm />
           <ReviewList />
        </div>
    )
}

MovieList.propTypes = {

}

export default MovieList

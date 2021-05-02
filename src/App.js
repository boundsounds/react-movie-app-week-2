import React,{useState} from 'react'
import './App.css';
import ReviewForm from './components/ReviewForm';
import Moviedata from './components/Moviedata';
import StarRating from './components/StarRating';
import ReviewList from './components/ReviewList'

function App() {
  const [reviews, setReviews] = useState([])
  function setReview(obj){
    const newArray = [...reviews, obj]
    setReviews(newArray)
  } 
  console.log(reviews)
  return (
    <div>
      <Moviedata  />
      <ReviewList reviews={reviews}/>
      <ReviewForm setReview={setReview} />

    </div>
  );
}

export default App;

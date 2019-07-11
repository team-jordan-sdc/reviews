import React from 'react';
import Review from './Review.jsx'


var ReviewList2 = (props) => (

  <div className="reviewlist_container">

    {props['reviews'].map((review) => {
      return <Review review = {review} filmname={props.filmname}/> })}
  </div>


);

export default ReviewList2;
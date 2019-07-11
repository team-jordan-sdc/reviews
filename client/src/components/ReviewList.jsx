import React from 'react';
import Review from './Review.jsx'


var ReviewList = (props) => (

  <div className="reviewlist_container">

    {props['reviews'].map((review) => {
      return <Review review = {review} filmname={props.filmname}/> })}
  </div>


);

export default ReviewList;

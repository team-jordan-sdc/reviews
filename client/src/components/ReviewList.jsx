import React from 'react';
import Review from './Review.jsx'
import { ReviewlistContainer } from '../styling.jsx';

var ReviewList = (props) => (

  <ReviewlistContainer>

    {props['reviews'].map((review) => {
      return <Review review = {review} filmname={props.filmname}/> })}

  </ReviewlistContainer>


);

export default ReviewList;

import React from 'react';

const Review = (props) => (

  <div>
    <div className="review_entry">

      <div className="rating">{props.review.rating}</div>
      <div className="author">{props.review.author}</div>
      <div className="source">{props.review.source}</div>
      <div className="review_text">{props.review.review}</div>
    </div>

  </div>
)

export default Review;

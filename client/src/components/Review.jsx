import React from 'react';

const Review = (props) => (

  <div>
    <div className="review_entry">
      <table>
        <td>
          <div className={"rating_" + (props.review.rating > 50 ? "high" : "low")}>{props.review.rating}</div>
        </td>
        <td>
          <div className="author">{props.review.author}</div>
        </td>
      </table>
      <div className="source">{props.review.source}</div>
      <div className="review_text">{props.review.review}</div>
    </div>

  </div>
)

export default Review;



import React from 'react';
import { PlainDiv, ReviewEntry, ReviewText, Source, Author, ReviewRating, PlainTable, PlainTD } from '../styling.jsx';

const Review = (props) => (

  <PlainDiv>
    <ReviewEntry>
      <PlainTable>
        <PlainTD>
          <ReviewRating>
            <img src={`${props.review.rating > 50 ? 'https://www.vudu.com/bluesteel/images/Tomato_fresh.svg' : 'https://www.vudu.com/bluesteel/images/Tomato_rotten.svg'}`}></img>
          </ReviewRating>
        </PlainTD>
        <PlainTD>
          <Author>{props.review.author}</Author>
        </PlainTD>
      </PlainTable>
      <Source>{props.review.source}</Source>
      <ReviewText>{props.review.review}</ReviewText>
    </ReviewEntry>

  </PlainDiv>
)

export default Review;



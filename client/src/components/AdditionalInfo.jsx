import React from 'react'
import { PlainDiv, LeftDetails, RightDetails, ReviewTitle, RowDetails, RowDetailsmoreMovies, PlainP, DetailBox } from '../styling.jsx';

var AdditionalInfo = (props) => (
  <PlainDiv>
    <LeftDetails>
      <ReviewTitle> More Info </ReviewTitle>
      <RowDetails> {`Length: ${props.additionalInfo.length} minutes`} </RowDetails>
      <RowDetails> {`Released: ${props.additionalInfo.released}`} </RowDetails>
      <RowDetails> {`Rating: ${props.additionalInfo.rating}`} </RowDetails>
      <RowDetails> {`Studio: ${props.additionalInfo.studio}`} </RowDetails>
      <RowDetails> {`Language: ${props.additionalInfo.language}`} </RowDetails>
      <RowDetailsmoreMovies>
        <img src='https://www.vudu.com/bluesteel/images/dma_small.svg' alt="Movies Anywhere"></img>
        <PlainP>Movies Anywhere</PlainP>
      </RowDetailsmoreMovies>
    </LeftDetails>
    <RightDetails>
      <RowDetailsmoreMovies>
         <DetailBox>UHD</DetailBox>
         <RowDetails> {props.additionalInfo.uhd}  </RowDetails>
      </RowDetailsmoreMovies>
      <RowDetailsmoreMovies>
        <DetailBox>HDX</DetailBox>
        <RowDetails> {props.additionalInfo.hdx} </RowDetails>
      </RowDetailsmoreMovies>
      <RowDetailsmoreMovies>
        <DetailBox>SD</DetailBox>
        <RowDetails> {props.additionalInfo.sd} </RowDetails>
      </RowDetailsmoreMovies>
      <RowDetailsmoreMovies>
        <DetailBox>CC</DetailBox>
        <RowDetails> {props.additionalInfo.cc} </RowDetails>
      </RowDetailsmoreMovies>
    </RightDetails>
  </PlainDiv>

)


export default AdditionalInfo;



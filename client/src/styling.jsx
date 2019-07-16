import styled from 'styled-components';

const PlainDiv = styled.div`
  background-color: #041c2c;
  font-family: sans-serif;
`;

const PlainTable = styled.table`
`;

const PlainTD = styled.td`
`;

const PlainP = styled.p`
margin-left: 10px;
`;

const ReviewEntry = styled.div`
  width: 300px;ReviewEntry
  margin-right: 20px;
  height: 240px;
  box-sizing: border-box;
  color: #fff;
  font-family: sans-serif;
  font-size: 17px;
  display: inline-block;
  overflow: hidden;
  white-space: normal;
`;

const ReviewText = styled.div`
  font-size: 15px;
  text-align: left;
  padding-left: 27px;
  padding-bottom: 30px;
  box-sizing: border-box;
`;

const Author = styled.div`
  font-size: 17px;
`;
Author.displayName = 'Author';

const ReviewRating = styled.div`
  font-size: 17px;
`;
ReviewRating.displayName = 'ReviewRating';

const Source = styled.div`
font-size: 12px;
text-align: left;
padding-left: 27px;
color: #b0bec5;
vertical-align: top;
font-style: italic;
`;
Source.displayName = 'Source';

const ReviewlistContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
  display:flex;
  height: 240px;
`;
ReviewlistContainer.displayName = 'ReviewlistContainer';


const ReviewTitle = styled.h4`
   color: white;
   font-family: sans-serif;
   margin-bottom: 5px;
`;

const Pbackward = styled.div`
background-image: url(https://www.vudu.com/content/images/pov_left_arrow.svg);
background-position: center;
background-repeat: no-repeat;
position: absolute;
z-index: 100;
height: 480px;
width: 35px;
background-color: rgba(0, 0, 0, 0.582);
display: none;
`;

const Pforward = styled.div`
  background-image: url(https://www.vudu.com/content/images/pov_right_arrow.svg);
  background-position: center;
  background-repeat: no-repeat;
  position: absolute;
  z-index: 99;
  height: 480px;
  width: 35px;
  background-color: rgba(0, 0, 0, 0.582);
  display: none;
  top: 30px;
  right: 0px;
`;

const ReviewContainer = styled.div`
  &:hover ${Pbackward} {
    transition: 2s ease-in-out;
    display: block;
  }
  &:hover ${Pforward} {
    transition: 2s ease-in-out;
    display: block;
  }
`;

const ReviewCarouselDiv = styled.div`
  width: fit-content;
  height: 480px;
  transition: transform .5s ease;
  white-space: nowrap;
  transform: translate3d(${position => position.position}px, 0px, 0px);
`;

const LeftDetails = styled.div`
  display: inline-block;
  float: left;
`;

const RightDetails = styled.div`
  display: inline-block;
  float: left;
  margin-left: 500px;
  margin-top: 60px;
`;

const RowDetails = styled.div`
  color: #fff;
  font-size: 13px;
  font-weight: 400;
  margin-left: 15px;
  margin-bottom: 5px;
  box-sizing: border-box;
`;
RowDetails.displayName = 'RowDetails';

const RowDetailsmoreMovies = styled.div`
  display: flex;
  font-size: 13px;
  font-weight: 400;
  color: #fff;
  font-size: 13px;
  margin-left: 15px;
`;

const DetailBox = styled.h4`
  border-radius: 3px;
  background-color: #fff;
  font-weight: 800;
  color: #031b2b;
  left: 50%;
  top: calc(50% + 1px);
  transform: translateX(-50%) translateY(-50%);
  font-size: 80%;
`;


export {
  PlainDiv, ReviewTitle, Pforward, Pbackward, ReviewContainer, ReviewCarouselDiv, ReviewlistContainer, ReviewEntry, ReviewText, Author, Source, ReviewRating, PlainTable, PlainTD, LeftDetails, RightDetails,
  RowDetails, RowDetailsmoreMovies, PlainP, DetailBox
};


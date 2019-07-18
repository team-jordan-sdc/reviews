import React from 'react';
import ReactDOM from 'react-dom';
import ReviewList from './ReviewList.jsx';
import ReviewList2 from './ReviewList2.jsx';
import { ReviewTitle, Pforward, Pbackward, ReviewContainer, ReviewCarouselDiv } from '../styling.jsx';

class ReviewCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      position: 0
    };
    this.moveForward = this.moveForward.bind(this);
    this.moveBackward = this.moveBackward.bind(this);
  }

  moveBackward() {
    if (this.state.position + 800 > 0) {
      this.setState( {position: 0} );
    } else {
      this.setState( {position: this.state.position + 800} );
    }
  }

  moveForward() {
    const reviewCarPosition = ReactDOM.findDOMNode(this.refs['ReviewCarousel']).getBoundingClientRect();

    if ((reviewCarPosition.left - 800) * -1 > reviewCarPosition.width - window.innerWidth) {
      this.setState( {position: (reviewCarPosition.width - window.innerWidth) * -1} );
    } else {
      this.setState( {position: this.state.position - 800} );
    }
  }

  render() {
    return (
      <ReviewContainer>
        <ReviewTitle>Reviews</ReviewTitle>
        <Pbackward onClick={this.moveBackward} />
        <ReviewCarouselDiv ref="ReviewCarousel" position={this.state.position}>
          <ReviewList reviews={this.props.reviews1} filmname={this.props.filmName} />
          <ReviewList2 reviews={this.props.reviews2} filmname={this.props.filmName} />
        </ReviewCarouselDiv>
        <Pforward onClick={this.moveForward} />
      </ReviewContainer>
    );
  }
}
export default ReviewCarousel;


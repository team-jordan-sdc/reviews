import React from 'react';
import ReviewList from './ReviewList.jsx';
import ReviewList2 from './ReviewList2.jsx';
import $ from 'jquery';

class ReviewCarousel extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      position: 0
    }
    this.moveForward = this.moveForward.bind(this);
    this.moveBackward = this.moveBackward.bind(this);
  }

  moveBackward(){
    if (this.state.position + 800 > 0) {
      this.setState({position: 0});
    } else {
      this.setState({position: this.state.position + 800});
    }
  }

  moveForward(){
    if(($('#review_carousel').position().left - 800) * -1 > $('#review_carousel').width() - $(window).width()) {
      this.setState({position: ($('#review_carousel').width() - $(window).width()) * -1});
    } else {
      this.setState({position: this.state.position - 800});
    }
  }

  render() {
    return (
      <div className="review_container">
        <div id="p_backward" onClick={this.moveBackward}></div>
        <div id="review_carousel" style={{ transform: `translate3d(${this.state.position}px, 0px, 0px)` }}>
          <ReviewList reviews={this.props.reviews1} filmname={this.props.filmName} />
          <ReviewList2 reviews={this.props.reviews2} filmname={this.props.filmName} />
        </div>
        <div id="p_forward" onClick={this.moveForward}></div>
      </div>
    )
  }
}
export default ReviewCarousel;

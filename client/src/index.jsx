import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import ReviewList from './components/ReviewList.jsx';
import ReviewList2 from './components/ReviewList2.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviewData1: [],
      reviewData2: [],
      filmName: ''
    };
    this.getReviews = this.getReviews.bind(this);
  }

  getReviews(filmname){
    fetch(`http://localhost:3001/api/reviews?filmname=${filmname}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    })
      .then(res => res.json())
      .then(data => {
        var arr1 = [];
        var arr2 = [];
        for (var i = 0; i< data[0].reviews.length; i++) {
          if (i<=(data[0].reviews.length)/2) {
            arr1.push(data[0].reviews[i])
          } else {
            arr2.push(data[0].reviews[i])
          }
        }
        this.setState({reviewData1: arr1, reviewData2: arr2, filmname: data[0].filmname})
      })
  }



  componentDidMount() {

    this.getReviews('The Shawshank Redemption');
  }


  render() {
  // console.log(this.state.reviewData2)
    return (
      <div className="reviewcontainer">
        <ReviewList reviews={this.state.reviewData1} filmname={this.state.filmName} />
        <ReviewList2 reviews={this.state.reviewData2} filmname={this.state.filmName} />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));



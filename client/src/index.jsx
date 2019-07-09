import { React } from 'react';
import { ReactDOM } from 'react-dom';
import $ from 'jquery';

import ReviewList from './components/ReviewList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviewData: [],
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
      .then(data =>  this.setState({reviewData: data[0].reviews, filmname: data[0].filmname}))
  }



  componentDidMount() {

    this.getReviews('The Shawshank Redemption');
  }


  render() {
    //console.log(this.state.reviewData)
    return (
      <div className="reviewcontainer">
        <ReviewList reviews={this.state.reviewData} filmname={this.state.filmName} />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));



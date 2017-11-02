import React, { Component } from 'react';
import MovieReviews from './MovieReviews'
import 'isomorphic-fetch';

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
export default class LatestMovieReviewsContainer extends Component {

  state = {
    reviews: []
  }

  fetchLatestReviews = () => {
    fetch(URL)
      .then(resp => resp.json())
      .then(json => {
        this.setState({
          reviews: json.results
        })
      })
  }

  render() {
    return (
      <div className="latest-movie-reviews">
        <h2>Latest Movie Reviews</h2>
        <MovieReviews reviews={this.state.reviews}/>
        <button onClick={this.fetchLatestReviews}>Get Latest Reviews</button>
      </div>
    )
  }
}

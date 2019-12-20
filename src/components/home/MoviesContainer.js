import React, { Component } from "react";
import { connect } from "react-redux";

import MoviesCard from "./MoviesCard";

class MoviesContainer extends Component {
  render() {
    const { movies } = this.props;
    const content =
      movies && movies.length > 0 ? (
        movies.map((movie, index) => <MoviesCard key={index} movie={movie} />)
      ) : (
        <div style={{ margin: "0 auto", padding: "20px" }}>NO RESULTS</div>
      );

    return <div className="row">{content}</div>;
  }
}

const mapStateToProps = state => ({
  movies: state.movies.movies
});

export default connect(mapStateToProps)(MoviesContainer);

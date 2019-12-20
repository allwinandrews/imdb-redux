import React, { Component } from "react";

import { connect } from "react-redux";
import {
  searchMovie,
  fetchMovies,
  setLoading
} from "../../actions/searchActions";

class SearchForm extends Component {
  onChange = event => {
    const { searchMovie } = this.props;
    const { value } = event.target;
    searchMovie(value);
  };

  onSubmit = event => {
    event.preventDefault();
    const { fetchMovies, text, setLoading } = this.props;
    fetchMovies(text);
    setLoading();
  };

  render() {
    return (
      <div className="jumbotron jumbotron-fluid mt-5 text-center">
        <div className="container">
          <form id="searchForm" onSubmit={this.onSubmit}>
            <input
              type="text"
              className="form-control"
              name="searchText"
              placeholder="Search Movies, TV Series ..."
              onChange={this.onChange}
            />
            <button type="submit" className="btn btn-primary btn-bg mt-3">
              <i className="fa fa-search" />
            </button>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({ text: state.movies.text });
export default connect(mapStateToProps, {
  searchMovie,
  fetchMovies,
  setLoading
})(SearchForm);

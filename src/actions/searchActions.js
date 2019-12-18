import axios from "axios";
import { SEARCH_MOVIE, FETCH_MOVIES, FETCH_MOVIE, LOADING } from "./types";

export const searchMovie = text => dispatch => {
  dispatch({ type: SEARCH_MOVIE, payload: text });
};

export const fetchMovies = text => dispatch => {
  const { REACT_APP_API_URL } = process.env;
  axios
    .get(`${REACT_APP_API_URL}&s=${text}`)
    .then(response =>
      dispatch({
        type: FETCH_MOVIES,
        payload: response.data.Search
      })
    )
    .catch(error => console.log(error));
};

export const fetchMovie = text => dispatch => {
  const { REACT_APP_API_URL } = process.env;
  axios
    .get(`${REACT_APP_API_URL}&i=${text}`)
    .then(response =>
      dispatch({
        type: FETCH_MOVIE,
        payload: response.data
      })
    )
    .catch(error => console.log(error));
};

export const setLoading = () => {
  return { type: LOADING };
};

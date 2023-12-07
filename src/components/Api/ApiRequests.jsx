import axios from 'axios';

const baseUrl = `https://api.themoviedb.org/3/`;
const options = {
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1M2IwYTUwOTQ3OGQwYjQ0MTY3ZDg2NzhjNTViN2FkYSIsInN1YiI6IjY1NzA5ZTYzNzlhMWMzMDExYjQyMTE4ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dPOrewaeEfXMnwkoBGWv0sh0Qg4UzftTlam932QpMnw',
  },
};
//// FETCH TRENDING MOVIES ////
export const getTrendingMovies = async () => {
  const url = `${baseUrl}trending/movie/day?language=en-US`;
  const resp = await axios.get(url, options);
  return resp;
};
//// FETCH SEARCHING MOVIE BY NAME ////
export const getMovie = async query => {
  const url = `${baseUrl}search/movie?query=${query}&include_adult=false&language=en-US`;
  const resp = await axios.get(url, options);
  return resp;
};
//// FETCH MOVIE DETAILS BY MOVIE ID ////
export const getMovieDetails = async id => {
  const url = `${baseUrl}movie/${id}?language=en-US`;
  const resp = await axios.get(url, options);
  return resp;
};
//// FETCH MOVIE CREDITS BY MOVIE ID ////
export const getMovieCredits = async id => {
  const url = `${baseUrl}movie/${id}/credits?language=en-US`;
  const resp = await axios.get(url, options);
  return resp;
};
//// FETCH MOVIE REVIEWS BY MOVIE ID ////
export const getMovieReviews = async id => {
  const url = `${baseUrl}movie/${id}/reviews?language=en-US&page=1`;
  const resp = await axios.get(url, options);
  return resp;
};

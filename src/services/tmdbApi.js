import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '0bf2d873828383136252a9c89ed588e7';

const options = {
  headers: {
    Authorization: `Bearer ${API_KEY}`
  }
};

export const fetchTrendingMovies = async () => {
  const response = await axios.get(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}`);
  return response.data.results;
};

export const getMovieById = async (query) => {
  const response = await axios.get(
    `${BASE_URL}/search/movie?query=${query}&include_adult=false&language=en-US&page=1&api_key=${API_KEY}`
  );
  return response.data.results;
};


export const fetchMovieDetails = async (id) => {
  const response = await axios.get(`${BASE_URL}/movie/${id}`, options);
  return response.data;
};

export const fetchMovieCredits = async (id) => {
  const response = await axios.get(`${BASE_URL}/movie/${id}/credits`, options);
  return response.data.cast;
};

export const fetchMovieReviews = async (id) => {
  const response = await axios.get(`${BASE_URL}/movie/${id}/reviews`, options);
  return response.data.results;
};

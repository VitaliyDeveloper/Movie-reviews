import axios from 'axios';

const KEY = 'd2e94e48e038eb54fbcf63f3b797b0c5';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export async function fetchMovieReviews(movieId) {
  const response = await axios(`movie/${movieId}/reviews`, {
    params: {
      api_key: KEY,
    },
  });
  const fetchMovieReviews = response.data;
  // console.log(fetchMovieReviews);

  return fetchMovieReviews;
}

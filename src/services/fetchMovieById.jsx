import axios from 'axios';

const KEY = 'd2e94e48e038eb54fbcf63f3b797b0c5';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export async function fetchMovieById(movieId) {
  const response = await axios(`movie/${movieId}`, {
    params: {
      api_key: KEY,
    },
  });
  const fetchMovieById = response.data;
  console.log(fetchMovieById);

  return fetchMovieById;
}

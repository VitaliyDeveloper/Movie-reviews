import axios from 'axios';

const KEY = 'd2e94e48e038eb54fbcf63f3b797b0c5';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export async function fetchMovieCredits(movieId) {
  try {
    const response = await axios(`movie/${movieId}/credits`, {
      params: {
        api_key: KEY,
      },
    });
    const fetchMovieCredits = response.data;
    // console.log(fetchMovieCredits);

    return fetchMovieCredits;
  } catch (error) {
    console.error(error);
  }
}

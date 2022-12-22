import axios from 'axios';

const KEY = 'd2e94e48e038eb54fbcf63f3b797b0c5';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export async function fetchSearchMovies(keyword) {
  try {
    const response = await axios('search/movie', {
      params: {
        api_key: KEY,
        size: 20,
        query: keyword,
      },
    });
    const fetchSearchMovies = response.data;
    // console.log(fetchSearchMovies);

    return fetchSearchMovies;
  } catch (error) {
    console.log(error);
  }
}

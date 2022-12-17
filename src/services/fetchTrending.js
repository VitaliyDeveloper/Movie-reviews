// https://api.themoviedb.org/3/movie/550?api_key=d2e94e48e038eb54fbcf63f3b797b0c5

import axios from 'axios';

const KEY = 'd2e94e48e038eb54fbcf63f3b797b0c5';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export async function fetchTrendingMovies() {
  const response = await axios('trending/all/day', {
    params: {
      api_key: KEY,
      size: 20,
    },
  });
  const trendingMovies = response.data;
  console.log(trendingMovies);

  return trendingMovies;
}

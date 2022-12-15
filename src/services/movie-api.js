// https://api.themoviedb.org/3/movie/550?api_key=d2e94e48e038eb54fbcf63f3b797b0c5

const BASE_URL = 'https://api.themoviedb.org/3/movie/550';
const KEY_API = 'd2e94e48e038eb54fbcf63f3b797b0c5';

async function fetchMoviesEror(url = '', config = {}) {
  const response = await fetch(url, config);
  return response.ok
    ? await response.json()
    : Promise.reject(new Error('Not found'));
}

export function fetchMovie() {
  return fetchMoviesEror(`${BASE_URL}?${KEY_API}`);
}

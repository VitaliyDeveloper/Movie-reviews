import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import toastStyles from 'services/toastStyle';
import 'react-toastify/dist/ReactToastify.css';
import { fetchSearchMovies } from 'services/fetchSearchMovies';
import MoviesSearchList from 'components/MoviesSearchList/MoviesSearchList';
import MovieList from 'components/MovieList/MovieList';

const MovieSearchPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('moviename');

  console.log(setSearchParams);
  useEffect(() => {
    if (query === null || query === '') {
      return;
    }
    async function fetchMovies() {
      const getMovie = await fetchSearchMovies(query).then(({ results }) => {
        const moviesArr = [];
        if (results.length === 0) {
          toast.error(
            'Sorry, there are no images matching your search query. Please try again.',
            toastStyles
          );
          return;
        }
        results.map(
          ({ id, title, name, poster_path, vote_average, vote_count }) => {
            const movie = {
              id,
              title,
              name: name,
              poster: poster_path,
              voteAverage: vote_average,
              voteCount: vote_count,
            };

            return moviesArr.push(movie);
          }
        );

        return moviesArr;
      });

      setMovies(getMovie);
    }
    fetchMovies();
  }, [query]);

  return (
    <>
      <MoviesSearchList />
      {movies && <MovieList movies={movies} />}
    </>
  );
};

export default MovieSearchPage;

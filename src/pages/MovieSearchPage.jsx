import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchSearchMovies } from 'services/fetchSearchMovies';
import { MoviesSearchList } from 'components/MoviesSearchList/MoviesSearchList';

export const MovieSearchPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('moviename');

  useEffect(() => {
    if (query === null || query === '') {
      return;
    }
    async function fetchMovies() {
      const getMovie = await fetchSearchMovies(query).then(({ results }) => {
        const moviesArr = [];

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

  return <MoviesSearchList movies={movies} />;
};

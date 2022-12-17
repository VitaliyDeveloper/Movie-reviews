import { useState } from 'react';
import { useEffect } from 'react';
import { MoviesItemsHome } from 'components/MoviesItams/MoviesItemsHome';
import { fetchTrendingMovies } from 'services/fetchTrending';

export const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchTrendingMovies().then(({ results }) => {
      const moviesArr = [];

      results.map(
        ({ id, title, name, poster_path, vote_average, vote_count }) => {
          const movie = {
            id,
            title: title,
            name: name,
            poster: poster_path,
            voteAverage: vote_average,
            voteCount: vote_count,
          };

          return moviesArr.push(movie);
        }
      );

      setMovies(moviesArr);
    });
  }, []);

  return movies && <MoviesItemsHome movies={movies} />;
};

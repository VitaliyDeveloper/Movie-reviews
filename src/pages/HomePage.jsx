import { useState } from 'react';
import { useEffect } from 'react';
import MovieList from 'components/MovieList/MovieList';
import { TitleHome } from 'components/Notifications/Notifications';
import { fetchTrendingMovies } from 'services/fetchTrending';

const HomePage = () => {
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

  return (
    <>
      <TitleHome />
      {movies && <MovieList movies={movies} />}
    </>
  );
};

export default HomePage;

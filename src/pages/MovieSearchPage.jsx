import { useState, useEffect } from 'react';
import { Link, Outlet, useSearchParams } from 'react-router-dom';
import { fetchSearchMovies } from 'services/fetchSearchMovies';
// import noPoster from '../img/no-poster.png';
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

  // const handleSubmit = event => {
  //   event.preventDefault();
  //   const form = event.target;

  //   setSearchParams({ moviename: form.elements.query.value });

  //   form.reset();
  // };

  return (
    <>
      <MoviesSearchList movies={movies} />
      {/* <form onSubmit={handleSubmit}>
        <input type="text" name="query" />
        <button>Search</button>
      </form>
      {movies && (
        <>
          <ul>
            {movies.map(({ id, title, name, poster }) => (
              <li key={id}>
                <img
                  src={
                    poster
                      ? `https://image.tmdb.org/t/p/w500/${poster}`
                      : noPoster
                  }
                  alt={title}
                  width="250"
                />
                <Link to={id}>{title ? title : name}</Link>
              </li>
            ))}
          </ul>
          <Outlet />
        </>
      )} */}
    </>
  );
};

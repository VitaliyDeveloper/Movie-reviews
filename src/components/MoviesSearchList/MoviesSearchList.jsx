import { Link, Outlet, useSearchParams } from 'react-router-dom';
import { MovieItemsStyle, MovieListStyle } from './MovieSearchList.styled';
import noPoster from '../../img/no-poster.png';

export const MoviesSearchList = ({ movies }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  // const query = searchParams.get('moviename');

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;

    setSearchParams({ moviename: form.elements.query.value });

    form.reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="query" />
        <button>Search</button>
      </form>
      {movies && (
        <>
          <MovieListStyle>
            {movies.map(({ id, title, name, poster }) => (
              <MovieItemsStyle key={id}>
                <img
                  src={
                    poster
                      ? `https://image.tmdb.org/t/p/w500/${poster}`
                      : noPoster
                  }
                  alt={title}
                  height="200"
                />
                <Link to={id}>{title}</Link>
              </MovieItemsStyle>
            ))}
          </MovieListStyle>
          <Outlet />
        </>
      )}
    </>
  );
};

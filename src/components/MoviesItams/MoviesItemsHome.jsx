import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { MovieItemsStyle } from './MovieItemsHome.styled';
import { MovieListStyle } from './MovieItemsHome.styled';
import noPoster from '../../img/no-poster.png';

export const MoviesItemsHome = ({ movies }) => {
  return (
    <>
      <MovieListStyle>
        {movies.map(({ id, title, name, poster }) => (
          <MovieItemsStyle key={id}>
            <img
              src={
                poster ? `https://image.tmdb.org/t/p/w500/${poster}` : noPoster
              }
              alt={title}
              height="200"
            />
            <Link to={`moviesinfo/${id}`}>{title ? title : name}</Link>
          </MovieItemsStyle>
        ))}
      </MovieListStyle>
      <Outlet />
    </>
  );
};

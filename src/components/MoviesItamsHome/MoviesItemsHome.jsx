// import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Outlet, useLocation } from 'react-router-dom';
import {
  MovieItemsStyle,
  TitleStyle,
  MovieListStyle,
  LinkStyle,
  PosterStyle,
} from './MovieItemsHome.styled';
import noPoster from '../../img/no-poster.png';

const MoviesItemsHome = ({ movies }) => {
  const location = useLocation();

  return (
    <>
      <TitleStyle>Popular movies today</TitleStyle>
      <MovieListStyle>
        {movies.map(({ id, title, name, poster }) => (
          <MovieItemsStyle key={id}>
            <LinkStyle to={`movies/${id}`} state={{ from: location }}>
              <PosterStyle
                src={
                  poster
                    ? `https://image.tmdb.org/t/p/w500/${poster}`
                    : noPoster
                }
                alt={title}
                height="200"
              />
              {title ? title : name}
            </LinkStyle>
          </MovieItemsStyle>
        ))}
      </MovieListStyle>
      <Outlet />
    </>
  );
};

MoviesItemsHome.prototype = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      name: PropTypes.string,
      poster: PropTypes.string,
    })
  ).isRequired,
};

export default MoviesItemsHome;

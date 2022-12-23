import PropTypes from 'prop-types';
import { Outlet, useLocation } from 'react-router-dom';
import {
  MovieItemsStyle,
  MovieListStyle,
  LinkStyle,
  PosterStyle,
} from './MovieList.styled';

import noPoster from '../../img/no-poster.png';

const MovieList = ({ movies }) => {
  const location = useLocation();
  console.log('MovieList location-', location);
  return (
    <>
      <MovieListStyle>
        {movies.map(({ id, title, name, poster }) => (
          <MovieItemsStyle key={id}>
            <LinkStyle to={`/movies/${id}`} state={{ from: location }}>
              <PosterStyle
                src={
                  poster
                    ? `https://image.tmdb.org/t/p/w500/${poster}`
                    : noPoster
                }
                alt={title ? title : name}
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

MovieList.prototype = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      name: PropTypes.string,
      poster: PropTypes.string,
    })
  ).isRequired,
};

export default MovieList;

import PropTypes from 'prop-types';
import { ToastContainer } from 'react-toastify';
import { Outlet, useSearchParams, useLocation } from 'react-router-dom';
import {
  MovieItemsStyle,
  MovieListStyle,
  LinkStyle,
  FormStyle,
  BtnStyle,
  InputStyle,
  PosterStyle,
  MovieSearchContainer,
} from './MovieSearchList.styled';
import noPoster from '../../img/no-poster.png';

const MoviesSearchList = ({ movies }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  console.log(location);
  // const query = searchParams.get('moviename');

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;

    setSearchParams({ moviename: form.elements.query.value });

    form.reset();
  };

  return (
    <MovieSearchContainer>
      <FormStyle onSubmit={handleSubmit}>
        <InputStyle
          type="text"
          name="query"
          placeholder="Please enter name of movie"
        />
        <BtnStyle>SEARCH</BtnStyle>
      </FormStyle>
      {movies && (
        <>
          <MovieListStyle>
            {movies.map(({ id, title, name, poster }) => (
              <MovieItemsStyle key={id}>
                <LinkStyle to={`${id}`} state={{ from: location }}>
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
      )}
      <ToastContainer />
    </MovieSearchContainer>
  );
};

MoviesSearchList.prototype = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      name: PropTypes.string,
      poster: PropTypes.string,
    })
  ).isRequired,
};

export default MoviesSearchList;

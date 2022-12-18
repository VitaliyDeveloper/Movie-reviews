import { Link, Outlet, useSearchParams } from 'react-router-dom';
import {
  MovieItemsStyle,
  MovieListStyle,
  LinkStyle,
  FormStyle,
  BtnStyle,
  InputStyle,
  PosterStyle,
} from './MovieSearchList.styled';
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
                <PosterStyle
                  src={
                    poster
                      ? `https://image.tmdb.org/t/p/w500/${poster}`
                      : noPoster
                  }
                  alt={title ? title : name}
                  height="200"
                />
                <LinkStyle to={`${id}`}>{title ? title : name}</LinkStyle>
              </MovieItemsStyle>
            ))}
          </MovieListStyle>
          <Outlet />
        </>
      )}
    </>
  );
};

import { ToastContainer } from 'react-toastify';
import { useSearchParams, useLocation } from 'react-router-dom';
import {
  FormStyle,
  BtnStyle,
  InputStyle,
  MovieSearchContainer,
} from './MovieSearchList.styled';

const MoviesSearchList = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  console.log('MoviesSearchList location', location);
  const query = searchParams.get('moviename');
  console.log(query);

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
      <ToastContainer />
    </MovieSearchContainer>
  );
};

export default MoviesSearchList;

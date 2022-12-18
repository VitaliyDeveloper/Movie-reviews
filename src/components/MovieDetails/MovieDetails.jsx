import { useLocation, useNavigate } from 'react-router-dom';
import {
  BtnStyle,
  DetailsContainer,
  Poster,
  DescriptionContainer,
  DescriptionMovie,
  DescriptionContainerInfo,
  DescripContainerColumn,
  GenresList,
  GenresItems,
  VoteContainer,
  Vote,
  VoteSpan,
  AdditionalContainer,
  AdditionalList,
  AdditionalItems,
  NavLinkStyle,
} from './MovieDetails.styled';

import noPoster from '../../img/no-poster.png';

export const MovieDetails = ({ movie }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const subLocation = location.state;

  console.log(subLocation);

  const onGoBack = () => navigate(location?.state?.from ?? '/');

  console.log(movie);
  return (
    <>
      <BtnStyle type="button" onClick={onGoBack}>
        Go back
      </BtnStyle>
      <DetailsContainer>
        <Poster
          src={
            movie.poster
              ? `https://image.tmdb.org/t/p/w500/${movie.poster}`
              : noPoster
          }
          alt={movie.title ? movie.title : movie.name}
          height="500"
        />
        <h2>{movie.title ? movie.title : movie.name}</h2>
        <DescripContainerColumn>
          <DescriptionContainer>
            <h3>Overview</h3>
            <DescriptionMovie>{movie.description}</DescriptionMovie>
          </DescriptionContainer>

          <DescriptionContainerInfo>
            <h3>Genres</h3>
            <GenresList>
              {movie.genres &&
                movie.genres.map(({ name, id }) => (
                  <GenresItems key={id}>{name}</GenresItems>
                ))}
            </GenresList>
            <VoteContainer>
              <Vote>
                Vote average: <VoteSpan>{movie.voteAverage}</VoteSpan>
              </Vote>
              <Vote>
                Vote count: <VoteSpan>{movie.voteCount}</VoteSpan>
              </Vote>
            </VoteContainer>
            <p>Release date: {movie.releaseDate}</p>
          </DescriptionContainerInfo>
        </DescripContainerColumn>
      </DetailsContainer>

      <AdditionalContainer>
        <h3>Additional Information</h3>
        <AdditionalList>
          <AdditionalItems>
            <NavLinkStyle to="cast" state={{ from: subLocation }}>
              Cast
            </NavLinkStyle>
          </AdditionalItems>
          <AdditionalItems>
            <NavLinkStyle to="reviews" state={{ from: subLocation }}>
              Reviews
            </NavLinkStyle>
          </AdditionalItems>
        </AdditionalList>
      </AdditionalContainer>
    </>
  );
};

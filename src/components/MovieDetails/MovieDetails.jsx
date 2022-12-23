import PropTypes from 'prop-types';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaChevronLeft } from 'react-icons/fa';
import {
  BtnStyle,
  BtnText,
  DetailsContainer,
  Poster,
  Title,
  Subtitle,
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
  NavLinkBtn,
} from './MovieDetails.styled';

import noPoster from '../../img/no-poster.png';

const MovieDetails = ({ movie }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const {
    name,
    poster,
    title,
    description,
    genres,
    voteAverage,
    voteCount,
    releaseDate,
  } = movie;

  const onGoBack = () => navigate(location?.state?.from ?? '/');

  console.log('MovieDetails Location-', location);
  // console.log(movie);
  return (
    <>
      <BtnStyle type="button" onClick={onGoBack}>
        <FaChevronLeft />
        <BtnText>GO BACK</BtnText>
      </BtnStyle>
      <DetailsContainer>
        <Poster
          src={poster ? `https://image.tmdb.org/t/p/w500/${poster}` : noPoster}
          alt={title ? title : name}
          height="500"
        />
        <DescripContainerColumn>
          <DescriptionContainerInfo>
            <DescriptionContainer>
              <Title>{title ? title : name}</Title>
              <h3>Overview</h3>
              <DescriptionMovie>{description}</DescriptionMovie>
            </DescriptionContainer>
            <h3>Genres</h3>
            <GenresList>
              {genres &&
                genres.map(({ name, id }) => (
                  <GenresItems key={id}>{name}</GenresItems>
                ))}
            </GenresList>
            <VoteContainer>
              <Vote>
                Vote average: <VoteSpan>{voteAverage}</VoteSpan>
              </Vote>
              <Vote>
                Vote count: <VoteSpan>{voteCount}</VoteSpan>
              </Vote>
            </VoteContainer>
            <p>Release date: {releaseDate}</p>
          </DescriptionContainerInfo>
        </DescripContainerColumn>
      </DetailsContainer>

      <AdditionalContainer>
        <Subtitle>Additional Information</Subtitle>
        <AdditionalList>
          <AdditionalItems>
            <NavLinkStyle to="cast" state={{ from: location?.state?.from }}>
              <NavLinkBtn>Cast</NavLinkBtn>
            </NavLinkStyle>
          </AdditionalItems>
          <AdditionalItems>
            <NavLinkStyle to="reviews" state={{ from: location?.state?.from }}>
              <NavLinkBtn>Reviews</NavLinkBtn>
            </NavLinkStyle>
          </AdditionalItems>
        </AdditionalList>
      </AdditionalContainer>
    </>
  );
};

MovieDetails.prototype = {
  movie: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      title: PropTypes.string,
      poster: PropTypes.string,
      releaseDate: PropTypes.string,
      voteAverage: PropTypes.number,
      voteCount: PropTypes.number,
      genres: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string,
          id: PropTypes.number,
        })
      ),
    })
  ).isRequired,
};

export default MovieDetails;

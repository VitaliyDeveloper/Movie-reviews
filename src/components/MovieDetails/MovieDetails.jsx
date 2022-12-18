import { useLocation, useNavigate, NavLink } from 'react-router-dom';

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
      <button type="button" onClick={onGoBack}>
        Go back
      </button>
      <div>
        <div>
          <img
            src={
              movie.poster
                ? `https://image.tmdb.org/t/p/w500/${movie.poster}`
                : noPoster
            }
            alt={movie.title ? movie.title : movie.name}
            height="500"
          />
          <div>
            <h2>{movie.title ? movie.title : movie.name}</h2>
            <p></p>
            <h3>Overview</h3>
            <p>{movie.description}</p>
            <h3>Genres</h3>
            <ul>
              {movie.genres &&
                movie.genres.map(({ name, id }) => <li key={id}>{name}</li>)}
            </ul>
          </div>
          <p>Release date: {movie.releaseDate}</p>
        </div>
        <p>Vote average: {movie.voteAverage}</p>
        <p>Vote count: {movie.voteCount}</p>
      </div>

      <div>
        <h3>Additional Information</h3>
        <ul>
          <li>
            <NavLink to="cast" state={{ from: subLocation }}>
              Cast
            </NavLink>
          </li>
          <li>
            <NavLink to="reviews" state={{ from: subLocation }}>
              Reviews
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

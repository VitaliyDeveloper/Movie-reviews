import { useEffect, useState } from 'react';
import { Suspense } from 'react';
import Loader from '../components/Loader/Loader';
import { Route, Routes } from 'react-router-dom';
// import { useFetchMovie } from 'hooks/useFetchMovie';
import { useParams } from 'react-router-dom';
import { MovieDetails } from 'components/MovieDetails/MovieDetails';
import { fetchMovieById } from 'services/fetchMovieById';
import { Cast } from './Cast';
import { Reviews } from './Reviews';

export const MovieDetailsPage = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const movie = fetchMovieById(movieId).then(
      ({
        original_title,
        genres,
        overview,
        poster_path,
        release_date,
        vote_average,
        vote_count,
      }) => {
        const movieDetails = {
          title: original_title,
          genres: genres,
          description: overview,
          poster: poster_path,
          releaseDate: release_date,
          voteAverage: vote_average,
          voteCount: vote_count,
        };

        return setMovie(movieDetails);
      }
    );
  }, [movieId]);
  return (
    <>
      {movie && <MovieDetails movieDetails={movie} />}

      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Routes>
      </Suspense>
    </>
  );
};

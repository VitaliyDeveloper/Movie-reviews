import { useEffect, useState } from 'react';
import { Suspense } from 'react';
import Loader from '../components/Loader/Loader';
import { Route, Routes } from 'react-router-dom';
// import { useFetchMovie } from 'hooks/useFetchMovie';
import { useParams } from 'react-router-dom';
import { MovieDetails } from 'components/MovieDetails/MovieDetails';
import { fetchMovieById } from 'services/fetchMovieById';
import { CastPage } from './CastPage';
import { ReviewsPage } from './ReviewsPage';

export const MovieDetailsPage = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    fetchMovieById(movieId).then(
      ({
        original_title,
        genres,
        overview,
        poster_path,
        release_date,
        vote_average,
        vote_count,
      }) => {
        const movie = {
          title: original_title,
          genres: genres,
          description: overview,
          poster: poster_path,
          releaseDate: release_date,
          voteAverage: vote_average,
          voteCount: vote_count,
        };

        return setMovie(movie);
      }
    );
  }, [movieId]);
  return (
    <>
      {movie && <MovieDetails movie={movie} />}

      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="cast" element={<CastPage movie={movie} />} />
          <Route path="reviews" element={<ReviewsPage movie={movie} />} />
        </Routes>
      </Suspense>
    </>
  );
};

import { useEffect, useState, Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Loader from '../components/Loader/Loader';
import MovieDetails from 'components/MovieDetails/MovieDetails';
import { fetchMovieById } from 'services/fetchMovieById';
// import { CastPage } from './CastPage';
// import { ReviewsPage } from './ReviewsPage';

const CastPage = lazy(() => import('./CastPage'));
const ReviewsPage = lazy(() => import('./ReviewsPage'));

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    fetchMovieById(movieId).then(
      ({
        original_title,
        original_name,
        genres,
        overview,
        poster_path,
        release_date,
        vote_average,
        vote_count,
      }) => {
        const movie = {
          title: original_title,
          name: original_name,
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
          <Route path="cast" element={<CastPage />} />
          <Route path="reviews" element={<ReviewsPage />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default MovieDetailsPage;

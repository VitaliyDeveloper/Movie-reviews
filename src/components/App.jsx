import { Routes, Route } from 'react-router-dom';
import { Suspense } from 'react';
import { Layout } from './Layout/Layout';
import { HomePage } from 'pages/HomePage';
import { MovieSearchPage } from 'pages/MovieSearchPage';
import { MovieInfoPage } from 'pages/MoviesInfoPage';
import { MovieDetailsPage } from 'pages/MovieDetailsPage';
import Loader from './Loader/Loader';

export const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/movie" element={<MovieInfoPage />} />
          <Route path="/movies" element={<MovieSearchPage />}></Route>
          <Route path="/movies/:movieId" element={<MovieDetailsPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

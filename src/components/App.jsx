import { Routes, Route } from 'react-router-dom';
import { Suspense } from 'react';
import { Layout } from './Layout/Layout';
import { HomePage } from 'pages/HomePage';
import { MovieSearchPage } from 'pages/MovieSearchPage';
import { MovieInfoPage } from 'pages/MoviesInfoPage';
import Loader from './Loader/Loader';

export const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="movie" element={<MovieSearchPage />}></Route>
          <Route path=":moviesinfo" element={<MovieInfoPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

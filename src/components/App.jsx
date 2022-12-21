import { Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Layout from './Layout/Layout';
import { NotFound } from './NotFound/NotFound';
import Loader from './Loader/Loader';

const HomePage = lazy(() => import('../pages/HomePage'));
const MovieSearchPage = lazy(() => import('../pages/MovieSearchPage'));
const MovieDetailsPage = lazy(() => import('../pages/MovieDetailsPage'));

export const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/movies" element={<MovieSearchPage />} />
          <Route path="/movies/:movieId/*" element={<MovieDetailsPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

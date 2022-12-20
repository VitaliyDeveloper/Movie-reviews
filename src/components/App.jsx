import { Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Layout from './Layout/Layout';
// import { HomePage } from 'pages/HomePage';
// import { MovieSearchPage } from 'pages/MovieSearchPage';
// import { MovieDetailsPage } from 'pages/MovieDetailsPage';
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
          <Route path="/movies" element={<MovieSearchPage />}></Route>
          <Route path="/movies/:movieId/*" element={<MovieDetailsPage />} />
          {/* <Route path="*" element={<  HomePage />} /> */}
        </Route>
      </Routes>
    </Suspense>
  );
};

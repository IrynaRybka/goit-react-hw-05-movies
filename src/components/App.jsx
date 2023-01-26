import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './HomePage/HomePage';
import { Home } from '../pages/Home/Home';

const Movies = lazy(() => import('./Movies/Movies').then(module => ({...module, default: module.Movies})));

const MovieDetails = lazy(() => import('./MovieDetailsComponent/MovieDetails').then(module => ({...module, default: module.MovieDetails})));

const Cast = lazy(() => import('./Cast/Cast').then(module => ({...module, default: module.Cast})));

const Reviews = lazy(() => import('./Reviews/Reviews').then(module => ({...module, default: module.Reviews})));

export const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast/>} />
            <Route path="reviews" element={<Reviews/>} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};



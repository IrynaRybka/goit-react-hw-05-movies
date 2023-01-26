import { Suspense } from 'react';
import { BiArrowBack } from 'react-icons/bi';
import { Outlet, useLocation } from 'react-router-dom';
import { MovieDetailsCard } from '../../pages/MovieDetails/MovieDetailsPage';
import { NavGoBack } from './MovieDetailsComponent.styled';

export const MovieDetails = () => {
  const location = useLocation();

  return (
    <div className="movieDetails">
      <NavGoBack to={location.state?.from ?? '/' ?? '/movies'}>
        <BiArrowBack size="18" />
        Go Back
      </NavGoBack>
      <MovieDetailsCard />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
};

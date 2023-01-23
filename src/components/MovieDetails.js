import { Link, Outlet, useLocation } from 'react-router-dom';
import { MovieDetailsCard } from '../pages/MovieDetailsPage';

export const MovieDetails = () => {
  const location = useLocation();

  return (
    <div className="movieDetails">
      <Link to={location.state?.from ?? ('/movies' && '/')}>
        Go Back
      </Link>
      <MovieDetailsCard />
      <Outlet />
    </div>
  );
};

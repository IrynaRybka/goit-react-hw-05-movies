
import { useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { fetchGetMovieDetails } from '../api/fetchApi';
import { toast } from 'react-toastify';
// import {MovieDetailsCard} from '../pages/MovieDetailsPage';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);
  console.log(movie);

  useEffect(() => {
    async function fetchDetails() {
      try {
        const result = await fetchGetMovieDetails(movieId);
        setMovie(result);
      } catch {
        toast.warn('Sorry, we don`t have overview yet.');
      }
    }
    fetchDetails();
  }, [movieId]);

  return (
    <div className="movieDetails">
      <button type="button"> Go Home</button>
      {/* <MovieDetailsCard/> */}
      <ul>
        <li>Cast</li>
        <li>Reviews</li>
      </ul>

      <Outlet />
    </div>
  );
};
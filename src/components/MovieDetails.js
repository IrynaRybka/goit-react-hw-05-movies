// import { useEffect, useState } from 'react';
import { Outlet} from 'react-router-dom';
// import { fetchGetMovieDetails } from '../api/fetchApi';
// import { toast } from 'react-toastify';
import {MovieDetailsCard} from '../pages/MovieDetailsPage';

export const MovieDetails = () => {
  // const { movieId } = useParams();
  // const [movie, setMovie] = useState(null);
  // console.log(movie);
  // console.log(movieId)

  // useEffect(() => {
  //   async function fetchDetails() {
  //     try {
  //       const { results } = await fetchGetMovieDetails(movieId);
  //       console.log(fetchGetMovieDetails(movieId))
  //       return setMovie(results);
  //     } catch {
  //       toast.warn('Sorry, we don`t have overview yet.');
  //     }
  //   }
  //   fetchDetails();
  // }, [movieId, movie]);

  return (
    <div className="movieDetails">
      <button type="button"> Go Home</button>
      <MovieDetailsCard/>
      <ul>
        <li>Cast</li>
        <li>Reviews</li>
      </ul>

      <Outlet />
    </div>
  );
};
import noPosterMovie from '../noImg/noPosterFilm.jpg';
// import {ThreeCircles } from  'react-loader-spinner'

import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchGetMovieDetails } from '../api/fetchApi';
import { toast } from 'react-toastify';
// import {  Outlet} from 'react-router-dom';

export const MovieDetailsCard = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
    console.log(movie);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const data = await fetchGetMovieDetails(movieId);
        setMovie(data);
      } catch {
        toast.warn('Sorry, we don`t have overview yet.');
      }
    };
    fetchDetails();
  }, []);

const noPosterFilm = () => {
  let posterFilm = '';
  if(movie.poster_path === null) {
    posterFilm = `${noPosterMovie}`
  } else {
    posterFilm = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
  }
  return posterFilm;
}
  //   const { title, poster_path, tagline, vote_average, overview, genres } = movie;
  return (
    <div className="movieDetails">
      {movie && (
        <div>
          <h1>{movie.title}</h1>
          <img
            src={noPosterFilm()}
            width="280"
            alt={movie.title}
          />
          <p>{movie.tagline}</p>
          <p>Average: {movie.vote_average}</p>
          <div>
            <h2>Overview</h2>
            <p>{movie.overview}</p>
            <h2>Genres</h2>
            <p>{movie.genres.map(genre => genre.name).join(' ')}</p>
          </div>
          <ul>
          <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
          </ul>
        </div>
      )}
    </div>
  );
};

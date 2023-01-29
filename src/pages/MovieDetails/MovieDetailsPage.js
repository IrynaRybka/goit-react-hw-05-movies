import noPosterMovie from '../../noImg/noPosterFilm.jpg';
import css from './MovieDetails.module.css';
import { NavItem } from './MovieDetails.styled';
import { IoPersonOutline } from 'react-icons/io5';
import { BsChatRightText } from 'react-icons/bs';
// import { NavLink } from 'react-router-dom';
// import {ThreeCircles } from  'react-loader-spinner'

import { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { fetchGetMovieDetails } from '../../api/fetchApi';
import { toast } from 'react-toastify';

export const MovieDetailsCard = () => {
  const location = useLocation();
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  console.log(movie);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const data = await fetchGetMovieDetails(movieId);
        setMovie(data);
      } catch (error) {
        toast.warn('Sorry, we don`t have overview yet.');
        return error.message;
      }
    };
    fetchDetails();
  }, [movieId]);

  const noPosterFilm = () => {
    let posterFilm = '';
    if (movie.poster_path === null) {
      posterFilm = `${noPosterMovie}`;
    } else {
      posterFilm = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    }
    return posterFilm;
  };
console.log(location)
  return (
    <div className={css.movieDetails}>
      {movie && (
        <div>
          <h1>{movie.title}</h1>
          <img src={noPosterFilm()} width="280" alt={movie.title} />
          <p>{movie.tagline}</p>
          <p>Average: {movie.vote_average}</p>
          <div>
            <h2>Overview</h2>
            <p>{movie.overview}</p>
            <h2>Genres</h2>
            <p>{movie.genres.map(genre => genre.name).join(' ')}</p>
          </div>
          <ul className={css.movieDetails_list}>
            <li className={css.movieDetails_item}>
              <NavItem to="cast" state={{ from: location.state?.from }}>
                <IoPersonOutline size="18" />
                Cast
              </NavItem>
            </li>
            <li>
              <NavItem to="reviews" state={{ from: location.state?.from }}>
                <BsChatRightText size="18" />
                Reviews
              </NavItem>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

import { useState, useEffect, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';
// import {ThreeCircles } from  'react-loader-spinner'
import { fetchSearchMovie } from '../../api/fetchApi';
import { toast } from 'react-toastify';
import { SearchBox } from '../SearchBox/SearchBox';
import noPosterMovie from '../../noImg/noPosterFilm.jpg';
import css from './Movies.module.css';
import { MoviesItem } from './Movies.styled';

export const Movies = () => {
  const location = useLocation();
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const queryName = searchParams.get('name') ?? '';

  useEffect(() => {
    if (!queryName) {
      return;
    }
    async function fetchSearch() {
      try {
        const { results } = await fetchSearchMovie(queryName);
        setMovies(results);
      } catch (error) {
        toast.warn('Write some text.');
      }
    }
    fetchSearch();
  }, [queryName]);

  const changeQuery = value => {
    setSearchParams(value !== '' ? { name: value } : {});
  };

  const visibleMovies = useMemo(() => {
    return movies.filter(movie =>
      movie.title.toLowerCase().includes(queryName.toLowerCase())
    );
  }, [queryName, movies]);

  return (
    <main>
      <SearchBox value={queryName} onChange={changeQuery} />
      <ul className={css.movies_list}>
        {visibleMovies.length > 0 &&
          visibleMovies.map(movie => {
            let posterFilm = '';
            if (movie.poster_path === null) {
              posterFilm = noPosterMovie;
            } else {
              posterFilm = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
            }
            return (
              <MoviesItem
                to={`${movie.id}`}
                key={movie.id}
                state={{ from: location }}
              >
                <img
                  src={posterFilm}
                  width="280"
                  height="420"
                  alt={movie.title}
                />
                <h2>{movie.title}</h2>
              </MoviesItem>
            );
          })}
      </ul>
    </main>
  );
};

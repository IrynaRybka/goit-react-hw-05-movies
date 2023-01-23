import { useState, useEffect, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';
// import {ThreeCircles } from  'react-loader-spinner'
import { fetchSearchMovie } from '../api/fetchApi';
import { toast } from 'react-toastify';
import { SearchBox } from './SearchBox';
import noPosterMovie from '../noImg/noPosterFilm.jpg'

export const Movies = () => {
  const location = useLocation();
  const [movies, setMovies] = useState([]);
  // const [query, setQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const queryName = searchParams.get('name') ?? '';

  useEffect(() => {
    if(!queryName) {
      return
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

  // const onSubmitForm = e =>{
  //   if(!searchParams) {
  //     toast.warn('Please write some text');
  //   }
  //   e.preventDefault();
  //   changeQuery();
 
  // }

  const visibleMovies = useMemo(() => {
    return movies.filter(movie =>
      movie.title.toLowerCase().includes(queryName.toLowerCase())
    );
  }, [queryName, movies]);

  return (
    <main>
      <SearchBox value={queryName} onChange={changeQuery} />
      <ul>
        {visibleMovies.length > 0 &&
          visibleMovies.map(movie => {
            let posterFilm = '';
            if(movie.poster_path === null) {
              posterFilm = noPosterMovie
            } else {
              posterFilm = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
            }
            return (<Link to={`${movie.id}`} key={movie.id} state={{ from: location }}>
            <img
              src={posterFilm}
              width="280"
              alt={movie.title}
            />
            <h2>{movie.title}</h2>
          </Link>)
            
})}
      </ul>
    </main>
  );
};

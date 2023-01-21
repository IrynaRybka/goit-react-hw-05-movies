// import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
// import { fetchSearchMovie } from '../api/fetchApi';

export const Movies = () => {
  // const [query, setQuery] = useState('');
  // const [movies, setMovies] = useState([]);

  // // console.log(fetchSearchMovie());

  // useEffect(() => {
  //   fetchSearchMovie().then(setMovies)
  // },[query]);

  return (
    <div className="movies">
      <h1>Find the movie</h1>
      <form>
        <input type="text" />
        <button type="submit">Search</button>
      </form>
      <Outlet />
    </div>
  );
};

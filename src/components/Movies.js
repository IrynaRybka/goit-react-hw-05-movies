// import { useState, useEffect } from 'react';
import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useSearchParams } from "react-router-dom";
// import {ThreeCircles } from  'react-loader-spinner'
import { fetchSearchMovie } from '../api/fetchApi';
import { toast } from 'react-toastify';

export const Movies = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const queryName = searchParams.get("name") ?? "";


//   useEffect(()=>{
//     if (!queryName) {
//       return;
//     }
//  const fetchSearch = async () => {
//   try {
//     const {results} = await fetchSearchMovie(queryName);
//     setMovies(results)
//   } catch {
//     toast.warn('Sorry, we don`t have film with this name.');
//   }
//  }
//  fetchSearch()
//   }, [queryName])

  



  useEffect(() => {
  
    fetchSearchMovie().then(setMovies)
  },[queryName]);

  console.log(movies)

  return (
    <div className="movies">
      <h1>Find the movie</h1>
      <form>
        <input type="text" value={query}
        onChange={e => setSearchParams(e.currentTarget.value.toLowerCase())} />
        <button type="submit">Search</button>
      </form>
      <Outlet />
    </div>
  );
};

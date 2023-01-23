import { fetchTrendingToday } from '../api/fetchApi';
import { toast } from 'react-toastify';
import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
// import noPoster from '../noImg/noPosterFilm.jpg'

export const Home = () => {
  const location = useLocation();
  const [trendings, setTrendings] = useState([]);

  useEffect(() => {
    async function moviesFetch() {
      try {
        const { results } = await fetchTrendingToday();
        if (results < 1) {
          toast.warn('Warning Notification ! Try again');
        }
        setTrendings(results);
      } catch {
        toast.warn('Something wrong ! Try again');
      }
    }
    moviesFetch();
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      {trendings && (
        <ul>
          {trendings.map(({ id, title, poster_path }) => {
            return (
              <NavLink key={id} to={`/movies/${id}`} state={{ from: location }}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                  width="280"
                  alt={title}
                />
                <h2>{title}</h2>
              </NavLink>
            );
          })}
        </ul>
      )}
    </div>
  );
};

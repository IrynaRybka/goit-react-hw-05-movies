// import noPosterFilm from '../noImg/noPosterFilm.jpg';
// import {ThreeCircles } from  'react-loader-spinner'

import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchGetMovieDetails } from '../api/fetchApi';
import { toast } from 'react-toastify';
// import {  Outlet} from 'react-router-dom';


// import {MovieDetailsCard} from '../pages/MovieDetailsPage';

export const MovieDetailsCard = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  //   console.log(movie);

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
  }, [movieId]);

  //   const { title, poster_path, tagline, vote_average, overview, genres } = movie;

  return (
    <div className="movieDetails">
      {movie && (
        <div>
          <h1>{movie.title}</h1>
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            width="280"
            alt={movie.title}
          />
          <p>{movie.tagline}</p>
          <p>Average: {movie.vote_average}</p>
          <div>
            <h2>Overview</h2>
            <p>{movie.overview}</p>
            <h2>Genres</h2>
            <p>{movie.genres.map(genre => genre.name).join(', ')}</p>
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

//     console.log(movie)
//     const { overview, title, genres, vote_average } = movie;

//     let posterPath;
//     if (movie.poster_path) {

//       posterPath = `https://image.tmdb.org/t/p/w400/${movie.poster_path}`;
//     } else {
//       posterPath =`${noPosterFilm}`;
//     }
//     return (
//       <div>
//         <img src={posterPath} alt={title} />
//         <div>
//           <h1>
//             {title}
//           </h1>
//           <p>
//             User Score: {Math.round(vote_average * 10)}%
//           </p>
//           <h2>Overview</h2>
//           <p>{overview}</p>
//           <h2>Genres</h2>
//           <p>
//             {genres.map(genre => genre.name).join(', ')}
//           </p>
//         </div>
//       </div>
//     );
//   };

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCredits } from '../api/fetchApi';
import { toast } from 'react-toastify';

export const Cast = () => {
  const { movieId } = useParams();
  const [actors, setActors] = useState([]);
  console.log(actors);

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const data = await fetchMovieCredits(movieId);
        setActors(data.cast);
      } catch {
        toast.warn('Sorry, we don`t have this list yet.');
      }
    };
    fetchCast();
  },[]);

 


  return (
    <div>
      <h2>Actors</h2>
      <ul>
        {actors && actors.map(actor => {return ( <li key={actor.id}>
               <img 
                 src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                   width="150"
                   alt={actor.name}
                 />
                 <h3>{actor.name}</h3>
                 <p>This actor played: {actor.character}</p>
               </li> )})}
      </ul>
    </div>
  );
};

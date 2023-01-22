import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCredits } from '../api/fetchApi';
import { toast } from 'react-toastify';
import noPosterActor from '../noImg/noPosterActor.jpg'

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
        {actors && actors.map(actor => { 
            let profilePath = '';
            if(actor.profile_path) {
                profilePath = `https://image.tmdb.org/t/p/w500${actor.profile_path}`
            } else {
                profilePath = noPosterActor;
            }
            return ( <li key={actor.id}>
               <img 
                 src={profilePath}
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

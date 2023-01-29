import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCredits } from '../../api/fetchApi';
import { toast } from 'react-toastify';
import noPosterActor from '../../noImg/noPosterActor.jpg';
import css from './Cast.module.css';

export const Cast = () => {
  const { movieId } = useParams();
  const [actors, setActors] = useState([]);
  console.log(actors);

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const data = await fetchMovieCredits(movieId);
        setActors(data.cast);
      } catch (error) {
        
        toast.warn('Sorry, we don`t have this list yet.');
        return error.message;
      }
    };
    fetchCast();
  }, [movieId]);

  if (actors.length < 1) {
    return <p className={css.no_cast}>This is cartoon. There aren`t actors.</p>;
  }

  return (
    <div className={css.cast}>
      <h2 className={css.cast_tageline}>Actors</h2>
      <ul className={css.cast_list}>
        {actors &&
          actors.map(actor => {
            let profilePath = '';
            if (actor.profile_path) {
              profilePath = `https://image.tmdb.org/t/p/w500${actor.profile_path}`;
            } else {
              profilePath = noPosterActor;
            }
            return (
              <li className={css.cast_list_item} key={actor.id}>
                <img
                  src={profilePath}
                  width="150"
                  height="225"
                  alt={actor.name}
                />
                <h3>{actor.name}</h3>
                <p>Played: {actor.character}</p>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

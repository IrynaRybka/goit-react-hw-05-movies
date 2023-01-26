import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from '../../api/fetchApi';
import { toast } from 'react-toastify';
import css from './Reviews.module.css';

export const Reviews = () => {
  const { movieId } = useParams();
  const [text, setText] = useState(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const data = await fetchMovieReviews(movieId);
        setText(data.results);
      } catch {
        toast.warn('Sorry, we don`t have any reviews yet.');
      }
    };
    fetchReviews();
  }, [movieId]);

  if (text < 1) {
    return <p>Sorry, we don't have any reviews!</p>;
  }

  return (
    text &&
    text.map(({ author, content, id, created_at }) => {
      return (
        <div className={css.reviews} key={id}>
          <h3>{author}</h3>
          <p className={css.reviews_content}>{content}</p>
          <p>{new Date().toDateString(created_at)}</p>
        </div>
      );
    })
  );
};

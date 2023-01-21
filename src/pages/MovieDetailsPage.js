
import noPosterFilm from '../noImg/noPosterFilm.jpg'
export const MovieDetailsCard = ({ movie }) => {
    console.log(movie)
    const { overview, title, genres, vote_average } = movie;
  
    let posterPath;
    if (movie.poster_path) {
      posterPath = `https://image.tmdb.org/t/p/w400/${movie.poster_path}`;
    } else {
      posterPath =`${noPosterFilm}`;
    }
    return (
      <div>
        <img src={posterPath} alt={title} />
        <div>
          <h1>
            {title}
          </h1>
          <p>
            User Score: {Math.round(vote_average * 10)}%
          </p>
          <h2>Overview</h2>
          <p>{overview}</p>
          <h2>Genres</h2>
          <p>
            {genres.map(genre => genre.name).join(', ')}
          </p>
        </div>
      </div>
    );
  };
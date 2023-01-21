import { Route, Routes } from 'react-router-dom';
import { HomePage } from './HomePage/HomePage';
import { Home } from '../pages/Home';
import { Movies } from './Movies';
import { MovieDetails } from './MovieDetails';
// import { Cast } from './Cast';
// import { Reviews } from './Reviews';

export const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<div>Cast</div>} />
            <Route path="reviews" element={<div>Reviews</div>} />
          </Route>
          {/* <Route path="*" element={<div>NotFound</div>} /> */}
        </Route>
      </Routes>
    </div>
  );
};

// '/' - компонент Home, домашняя страница со списком популярных кинофильмов.
// '/movies' - компонент Movies, страница поиска фильмов по ключевому слову.
// '/movies/:movieId' - компонент MovieDetails, страница с детальной информацией о кинофильме.
// /movies/:movieId/cast - компонент Cast, информация о актерском составе. Рендерится на странице MovieDetails.
// /movies/:movieId/reviews - компонент Reviews, информация об обзорах. Рендерится на странице MovieDetails.

// api_key=79938206468f3281e8fe2b6c476a4d0b

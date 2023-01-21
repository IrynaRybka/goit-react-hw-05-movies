// import { useEffect, useState } from 'react';
import { Outlet} from 'react-router-dom';
// import { fetchGetMovieDetails } from '../api/fetchApi';
// import { toast } from 'react-toastify';
import {MovieDetailsCard} from '../pages/MovieDetailsPage';

export const MovieDetails = () => {
   return (
    <div className="movieDetails">
      <button type="button"> Go Home</button>
      <MovieDetailsCard/>
      <ul>
        <li>Cast</li>
        <li>Reviews</li>
      </ul>

      <Outlet />
    </div>
  );
};
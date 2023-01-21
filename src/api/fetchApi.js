import axios from "axios";

const API_KEY = '79938206468f3281e8fe2b6c476a4d0b';
const address = 'https://api.themoviedb.org/3';

export const fetchTrendingToday = async () => {
  const {data} = await axios.get(`${address}/trending/movie/day?api_key=${API_KEY}&language=en-US`);
  return data;
}

export const fetchSearchMovie = async (query) => {
    const {data} = await axios.get(`${address}/search/movie?api_key=${API_KEY}&query=${query}&language=en-US`);
    return data;
}

export const fetchGetMovieDetails = async (id) => {
    const {data} = await axios.get(`${address}/movie/${id}?api_key=${API_KEY}&language=en-US`);
    return data;
}

export const fetchMovieCredits = async(id) => {
    const {data} = await axios.get(`${address}/movie/${id}/credits?api_key=${API_KEY}&language=en-US`);
    return data;
}

export const fetchMovieReviews = async(id) => {
    const {data} = await axios.get(`${address}/movie/${id}/reviews?api_key==${API_KEY}&language=en-US&page=1`);
    return data;
}

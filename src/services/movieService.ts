import axios from "axios";
import type { Movie } from "../types/movie";

export interface arrMovies {
  results: Movie[];
  total_pages: number;
  page: number;
}

async function fetchMovies(movie: string, page: number) {
  const res = await axios.get<arrMovies>(
    `https://api.themoviedb.org/3/search/movie`,
    {
      params: { query: movie, page },
      headers: { Authorization: `Bearer ${import.meta.env.VITE_API_KEY}` },
    }
  );

  return res.data;
}

export default fetchMovies;

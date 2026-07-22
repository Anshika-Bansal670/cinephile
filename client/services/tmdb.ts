import { Movie } from "@/types/movie";

const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

interface TrendingMoviesResponse {
  page: number;
  results: Movie[];
}

export async function getTrendingMovies(): Promise<TrendingMoviesResponse> {
  const res = await fetch(
    `${BASE_URL}/trending/movie/week?api_key=${API_KEY}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch trending movies");
  }

  return res.json();
}

export async function getTopRatedMovies(): Promise<TrendingMoviesResponse> {
  const res = await fetch(
    `${BASE_URL}/movie/top_rated?api_key=${API_KEY}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch top rated movies");
  }

  return res.json();
}

export async function getPopularMovies(): Promise<TrendingMoviesResponse> {
  const res = await fetch(
    `${BASE_URL}/movie/popular?api_key=${API_KEY}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch popular movies");
  }

  return res.json();
}

export async function getMovieDetails(id: string) {
  const res = await fetch(
    `${BASE_URL}/movie/${id}?api_key=${API_KEY}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch movie details");
  }

  return res.json();
}
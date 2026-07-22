import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/hero/Hero";
import MovieRow from "@/components/movies/MovieRow";

import {
  getTrendingMovies,
  getTopRatedMovies,
  getPopularMovies,
} from "@/services/tmdb";

export default async function Home() {
  const trending = await getTrendingMovies();
  const topRated = await getTopRatedMovies();
  const popular = await getPopularMovies();

  return (
    <main className="bg-black text-white">
      <Navbar />

      <Hero movie={trending.results[0]} />

      <MovieRow
        title="🔥 Trending"
        movies={trending.results}
      />

      <MovieRow
        title="⭐ Top Rated"
        movies={topRated.results}
      />

      <MovieRow
        title="🎥 Popular"
        movies={popular.results}
      />
    </main>
  );
}
import Hero from "@/components/hero/Hero";
import { getTrendingMovies } from "@/services/tmdb";

export default async function TestPage() {
  const data = await getTrendingMovies();

  return (
    <main>
      <Hero movie={data.results[0]} />
    </main>
  );
}
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/hero/Hero";
import { getTrendingMovies } from "@/services/tmdb";

export default async function Home() {
  const data = await getTrendingMovies();

  return (
    <main className="bg-black text-white">
      <Navbar />
      <Hero movie={data.results[0]} />
    </main>
  );
}
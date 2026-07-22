import { getMovieDetails } from "@/services/tmdb";
import Image from "next/image";

interface MoviePageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function MoviePage({ params }: MoviePageProps) {
  const { id } = await params;

  const movie = await getMovieDetails(id);

  const poster = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  const backdrop = `https://image.tmdb.org/t/p/original${movie.backdrop_path}`;

  return (
    <main
      className="min-h-screen bg-cover bg-center text-white"
      style={{
        backgroundImage: `url(${backdrop})`,
      }}
    >
      <div className="min-h-screen bg-black/70">
        <div className="mx-auto flex max-w-7xl gap-10 px-10 py-20">

          <div className="relative h-[600px] w-[400px] overflow-hidden rounded-xl">
            <Image
              src={poster}
              alt={movie.title}
              fill
              className="object-cover"
            />
          </div>

          <div className="max-w-3xl">

            <h1 className="text-6xl font-black">
              {movie.title}
            </h1>

            <div className="mt-6 flex gap-8 text-xl">
              <span>⭐ {movie.vote_average.toFixed(1)}</span>

              <span>🕒 {movie.runtime} min</span>

              <span>📅 {movie.release_date}</span>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {movie.genres.map((genre: any) => (
                <span
                  key={genre.id}
                  className="rounded-full bg-red-600 px-4 py-2"
                >
                  {genre.name}
                </span>
              ))}
            </div>

            <p className="mt-10 text-lg leading-9 text-gray-200">
              {movie.overview}
            </p>

          </div>

        </div>
      </div>
    </main>
  );
}
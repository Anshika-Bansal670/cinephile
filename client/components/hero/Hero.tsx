import { Movie } from "@/types/movie";

interface HeroProps {
  movie: Movie;
}

export default function Hero({ movie }: HeroProps) {
  const backdrop = `https://image.tmdb.org/t/p/original${movie.backdrop_path}`;

  return (
    <section
      className="relative h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${backdrop})`,
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Left Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="max-w-3xl px-10">
          <h1 className="text-6xl font-black md:text-8xl">
            {movie.title}
          </h1>

          <div className="mt-6 flex gap-8 text-lg">
            <span>⭐ {movie.vote_average.toFixed(1)}</span>
            <span>📅 {movie.release_date}</span>
          </div>

          <p className="mt-8 text-xl leading-9 text-gray-200">
            {movie.overview}
          </p>

          <div className="mt-10 flex flex-col gap-5 sm:flex-row">
            <button className="rounded-full bg-red-600 px-8 py-4 font-semibold transition hover:bg-red-700">
              🍿 Browse Movies
            </button>

            <button className="rounded-full border border-gray-400 px-8 py-4 font-semibold transition hover:border-white">
              ▶ Watch Trailer
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
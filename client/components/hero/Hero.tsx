import { Movie } from "@/types/movie";

interface HeroProps {
  movie: Movie;
}

export default function Hero({ movie }: HeroProps) {
    const backdrop = `https://image.tmdb.org/t/p/original${movie.backdrop_path}`;
  return (
    <section
  className="relative h-screen overflow-hidden bg-black"
  style={{
    backgroundImage: `url(${backdrop})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>

      {/* Background Gradient */}
    <div className="absolute inset-0 bg-black/70"></div>

<div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">

        {/* Movie Title */}
       <div className="max-w-3xl px-10">

    <h1 className="text-6xl md:text-8xl font-black">

        {movie.title}

    </h1>

    <div className="mt-6 flex gap-8 text-lg">

        <span>
            ⭐ {movie.vote_average.toFixed(1)}
        </span>

        <span>
            📅 {movie.release_date}
        </span>

    </div>

    <p className="mt-8 text-xl leading-9 text-gray-200">

        {movie.overview}

    </p>

</div>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-5">

          <button
            className="bg-red-600 hover:bg-red-700 transition duration-300 px-8 py-4 rounded-full font-semibold"
          >
            🍿 Browse Movies
          </button>

          <button
            className="border border-gray-500 hover:border-white transition duration-300 px-8 py-4 rounded-full font-semibold"
          >
            ▶ Watch Trailer
          </button>

        </div>

      </div>

    </section>
  );
}
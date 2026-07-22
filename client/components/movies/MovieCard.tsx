import Link from "next/link";
import Image from "next/image";
import { Movie } from "@/types/movie";

interface MovieCardProps {
  movie: Movie;
}

export default function MovieCard({ movie }: MovieCardProps) {
  const poster = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  const year = movie.release_date
    ? new Date(movie.release_date).getFullYear()
    : "N/A";

  return (
    <Link
      href={`/movie/${movie.id}`}
      className="block w-52 flex-shrink-0 cursor-pointer transition duration-300 hover:scale-105"
    >
      <div className="relative h-80 w-full overflow-hidden rounded-xl">
        <Image
          src={poster}
          alt={movie.title}
          fill
          className="object-cover"
        />
      </div>

      <h3 className="mt-3 truncate text-lg font-semibold">
        {movie.title}
      </h3>

      <div className="mt-1 flex items-center justify-between text-sm text-gray-400">
        <span>⭐ {movie.vote_average.toFixed(1)}</span>
        <span>{year}</span>
      </div>
    </Link>
  );
}
import { Star } from 'lucide-react';

export default function MovieCard({ movie }) {
  return (
    <div className="overflow-hidden rounded-lg border bg-white shadow-sm">
      <img
        src={movie.image.original}
        alt="Movie name"
        className="h-72 w-full object-cover"
      />

      <div className="p-4">
        <h2 className="mb-2 text-xl font-bold">{movie.name}</h2>

        <p className="mb-2 text-sm text-gray-500">{movie.premiered}</p>

        <div className="mb-4 flex items-center gap-1">
          <Star className="size-5 fill-yellow-400 text-yellow-400" />
          <span className="font-medium">{movie.rating.average}</span>
        </div>

        <button className="w-full cursor-pointer rounded-lg bg-red-600 px-4 py-2 font-medium text-white transition hover:bg-red-700">
          See Details
        </button>
      </div>
    </div>
  );
}

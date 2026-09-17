import { Star, X } from 'lucide-react';

export default function MovieDetailsModal({ movie, onClose }) {
  if (!movie) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-xl bg-white"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 cursor-pointer rounded-full bg-black/60 p-2 text-white hover:bg-black"
        >
          <X size={22} />
        </button>

        <img
          src={movie.image?.original}
          alt={movie.name}
          className="h-100 w-full object-cover"
        />

        <div className="p-6">
          <h2 className="mb-3 text-3xl font-bold">{movie.name}</h2>

          <div className="mb-4 flex flex-wrap items-center gap-4 text-sm">
            <div className="flex items-center gap-1">
              <Star size={18} className="fill-yellow-400 text-yellow-400" />
              <span>{movie.rating?.average ?? 'N/A'}</span>
            </div>

            <p>Released: {movie.premiered ?? 'N/A'}</p>
          </div>

          <div className="mb-4">
            <h3 className="mb-2 text-lg font-semibold">Overview</h3>

            <div
              className="text-gray-600"
              dangerouslySetInnerHTML={{
                __html: movie.summary || 'No summary available.',
              }}
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {movie.genres?.map((genre) => (
              <span
                key={genre}
                className="rounded-full bg-red-100 px-3 py-1 text-sm text-red-600"
              >
                {genre}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

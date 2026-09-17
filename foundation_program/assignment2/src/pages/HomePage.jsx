import { Link } from 'react-router';

export default function HomePage() {
  return (
    <section
      className="relative flex min-h-125 w-full items-center justify-center overflow-hidden rounded-lg bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://png.pngtree.com/thumb_back/fh260/background/20210902/pngtree-movie-camera-texture-background-image_784363.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black/65"></div>

      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center text-white">
        <h1 className="mb-4 text-4xl font-bold md:text-6xl">
          <span className="text-yellow-300">Discover</span> Movie
        </h1>

        <p className="mb-8 text-lg text-gray-200 md:text-xl">
          Explore movies, discover new{' '}
          <span className="text-blue-400 font-bold">stories</span>.
        </p>

        <Link
          to="/movies"
          className="inline-block rounded-lg bg-red-600 px-6 py-3 font-semibold transition hover:bg-red-700"
        >
          Explore
        </Link>
      </div>
    </section>
  );
}

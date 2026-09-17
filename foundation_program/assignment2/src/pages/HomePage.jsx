import { Link } from 'react-router';

export default function HomePage() {
  return (
    <section
      className="relative flex min-h-125 w-full items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://png.pngtree.com/thumb_back/fh260/background/20210902/pngtree-movie-camera-texture-background-image_784363.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black/65"></div>

      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center text-white">
        <h1 className="mb-4 text-4xl font-bold md:text-6xl">
          Discover Your Movie
        </h1>

        <p className="mb-8 text-lg text-gray-200 md:text-xl">
          Explore movies, discover new stories, and find the perfect film for
          your next movie night.
        </p>

        <Link
          to="/movies"
          className="inline-block rounded-lg bg-red-600 px-6 py-3 font-semibold transition hover:bg-red-700"
        >
          Explore Movies
        </Link>
      </div>
    </section>
  );
}

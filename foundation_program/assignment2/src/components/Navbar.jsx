import { FilmIcon } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="px-4 py-2 flex justify-between border m-2 rounded-lg">
      <div className="flex items-center gap-x-1">
        <FilmIcon />
        <big className="font-bold">Movie Explorer</big>
      </div>

      <div className="flex gap-x-4 items-center">
        <button>
          <a href="/">Home</a>
        </button>
        <button>
          <a href="/movies">List</a>
        </button>
      </div>
    </nav>
  );
}

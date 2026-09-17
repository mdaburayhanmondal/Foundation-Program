import { FilmIcon } from 'lucide-react';
import { Link } from 'react-router';

export default function Navbar() {
  return (
    <nav className="px-4 py-2 flex justify-between border m-2 rounded-lg">
      <button>
        <Link to={'/'} className="flex items-center gap-x-1">
          <FilmIcon />
          <big className="font-bold">MovieExplorer</big>
        </Link>
      </button>

      <div className="flex gap-x-4 items-center">
        <button>
          <Link to={'/'}>Home</Link>
        </button>
        <button>
          <Link to={'/movies'}>List</Link>
        </button>
      </div>
    </nav>
  );
}

import { useState } from 'react';
import LocationPicker from '../components/LocationPicker';

export default function Home() {
  const [showLocationPicker, setShowLocationPicker] = useState(false);
  return (
    <div className="flex flex-col gap-y-4 items-center">
      <h1 className="text-6xl text-blue-300 text-center">
        Foundation <span className="text-blue-700 font-bold">Weather</span> App
      </h1>
      <p className="text-center text-lg text-gray-500">
        Check today's weather now...
      </p>

      <button
        type="button"
        className="px-3 py-1 bg-green-300 rounded-md hover:cursor-pointer hover:bg-green-500 hover:text-green-900 hover:scale-105 transition-all duration-200"
        onClick={() => setShowLocationPicker(true)}
      >
        Check Weather
      </button>
      {showLocationPicker && (
        <LocationPicker onClose={() => setShowLocationPicker(false)} />
      )}
    </div>
  );
}

import { X } from 'lucide-react';
import { useState } from 'react';

export default function LocationPicker({ onClose }) {
  const [city, setCity] = useState('');

  const onHandleSubmit = (e) => {
    e.preventDefault();
    const enteredCity = city.trim().toLowerCase();
    console.log(enteredCity);
    setCity('');
  };

  const handleGeoLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        console.log(latitude, longitude);
      },
      (err) => {
        console.log(err);
      },
      {
        timeout: 5000,
      },
    );
  };

  return (
    <div className="fixed inset-0 flex flex-col justify-center items-center bg-black/30">
      <div className="h-80 w-100 bg-gray-200 shadow-xl p-4 rounded-lg space-y-4">
        <div className="flex justify-between">
          <h2 className="text-xl font-medium text-center">
            Where are you today?
          </h2>
          <button className="h-8 w-8 hover:cursor-pointer" onClick={onClose}>
            <X className="text-red-500 hover:bg-red-200 transition-all duration-300" />
          </button>
        </div>
        <div>
          <form
            onSubmit={onHandleSubmit}
            className="flex flex-col justify-center items-center gap-y-4"
          >
            <input
              type="text"
              className="w-full outline p-1 rounded-md"
              placeholder="Enter city name"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <button
              type="submit"
              className="px-3 py-1 bg-green-300 rounded-md hover:cursor-pointer hover:bg-green-500 hover:text-green-900 hover:scale-105 transition-all duration-200"
            >
              Get Weather
            </button>
          </form>
        </div>
        <div className="flex flex-col justify-center items-center gap-y-4">
          <h3>Or</h3>
          <button
            type="button"
            className="px-3 py-1 bg-green-300 rounded-md hover:cursor-pointer hover:bg-green-500 hover:text-green-900 hover:scale-105 transition-all duration-200"
            onClick={handleGeoLocation}
          >
            Use My Location
          </button>
        </div>
      </div>
    </div>
  );
}

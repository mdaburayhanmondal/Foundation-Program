export const getWeather = async (place) => {
  const { name, lat, lon } = place;

  const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,rain,wind_speed_10m,weather_code`;

  const result = await fetch(url);
  const data = await result.json();
  const now = data.current;
  if (!now) {
    throw new Error('Failed to get weather details!');
  }
  return {
    location: name,
    temperature: Math.round(now.temperature_2m),
    humidity: now.relative_humidity_2m,
    wind: now.wind_speed_10m,
  };
};

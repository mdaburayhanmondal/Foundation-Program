import { useEffect, useState } from 'react';
import Card from './Card';

export default function DisplayUsers() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        if (!res.ok) {
          throw new Error(res.message || 'Something went wrong!');
        }
        return res.json();
      })
      .then((data) => setUsers(data))
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    loading ?
      <div className="min-h-screen flex justify-center items-center">
        <h1 className="text-2xl">Loading...</h1>
      </div>
    : error ?
      <div className="min-h-screen flex justify-center items-center">
        <h1 className="text-2xl">{error}</h1>
      </div>
    : <div className="mx-4">
        {users.map((user, idx) => (
          <Card key={idx + user.id} name={user.name} email={user.email} />
        ))}
      </div>
  );
}

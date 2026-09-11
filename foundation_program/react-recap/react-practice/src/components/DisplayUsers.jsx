import { useEffect, useState } from 'react';
import Card from './Card';

export default function DisplayUsers() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!res.ok) {
          throw new Error(res.message || 'Something went wrong!');
        }
        const data = await res.json();
        setUsers(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
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

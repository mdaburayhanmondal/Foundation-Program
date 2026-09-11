import { useEffect, useState } from 'react';
import Card from './Card';

export default function DisplayUsers() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .finally(() => setLoading(false));
  }, []);

  return loading ?
      <div className="min-h-screen flex justify-center items-center">
        <h1 className="text-2xl">Loading...</h1>
      </div>
    : <div className="mx-4">
        {users.map((user, idx) => (
          <Card key={idx + user.id} name={user.name} email={user.email} />
        ))}
      </div>;
}

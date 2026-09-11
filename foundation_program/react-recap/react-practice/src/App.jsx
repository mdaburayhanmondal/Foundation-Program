import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log(count);
  }, [count]);

  return (
    <div>
      <h1 onClick={() => setCount(count + 1)}>Increment {count}</h1>
    </div>
  );
}

export default App;

import { use } from 'react';
import { CounterContext } from '../providers/counter.provider.jsx';

export default function NestedDisplay() {
  const { count } = use(CounterContext);

  return (
    <div className="bg-yellow-200 px-6 py-2 border rounded-md">
      <h1>Nested Display showing count: {count}</h1>
    </div>
  );
}

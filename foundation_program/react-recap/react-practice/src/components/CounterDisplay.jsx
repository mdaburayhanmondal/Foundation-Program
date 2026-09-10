import NestedDisplay from './NestedDisplay';

export default function CounterDisplay({ count }) {
  return (
    <div className="bg-gray-200 py-4 mx-4">
      <NestedDisplay count={count}/>
    </div>
  );
}

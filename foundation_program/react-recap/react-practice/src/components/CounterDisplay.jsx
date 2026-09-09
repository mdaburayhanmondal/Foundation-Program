export default function CounterDisplay({ count }) {
  return (
    <div className="bg-gray-200 py-4 mx-4">
      <h1 className="text-3xl mx-auto w-fit">{count}</h1>
    </div>
  );
}

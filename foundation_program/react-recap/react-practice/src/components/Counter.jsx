export default function Counter({ count, setCount }) {
  return (
    <div className="flex border border-red-500 my-8 mx-4 p-2 items-center justify-between">
      <button
        className="border border-green-500 p-1 rounded-md"
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
      <h1 className="text-3xl">{count}</h1>

      <button
        className="border border-yellow-500 p-1 rounded-md"
        onClick={() => setCount(count - 1)}
      >
        Decrement
      </button>
    </div>
  );
}

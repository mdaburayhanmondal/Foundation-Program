export default function TestComponent({ name }) {
  return (
    <div className="my-8 border mx-4 rounded-md">
      <h1
        onClick={() => {
          console.log('Rayhan');
        }}
        className="text-3xl mx-auto w-fit"
      >
        Hello {name}
      </h1>
    </div>
  );
}

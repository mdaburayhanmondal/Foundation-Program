import './App.css';
// import Card from './components/Card';
import Counter from './components/Counter.jsx';
import CounterDisplay from './components/CounterDisplay.jsx';
import CounterProvider from './providers/counter.provider.jsx';

function App() {
  // const [name, setName] = useState('');
  // const [age, setAge] = useState('');
  // const [friends, setFriends] = useState([
  //   { name: 'Rayhan', age: 23 },
  //   { name: 'Tonni', age: 23 },
  //   { name: 'Rupa', age: 24 },
  // ]);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(name, age);
  //   setFriends([...friends, { name, age }]);
  //   setName('');
  //   setAge('');
  // };

  return (
    // <div className="my-8 mx-4 space-y-8">
    //   <form
    //     onSubmit={handleSubmit}
    //     className="flex flex-col justify-between gap-y-4"
    //   >
    //     <input
    //       type="text"
    //       placeholder="Name"
    //       className="outline w-full h-8 rounded-md outline-amber-400 px-2 focus:outline-amber-500"
    //       onChange={(e) => setName(e.target.value)}
    //       value={name}
    //     />
    //     <input
    //       type="text"
    //       placeholder="Age"
    //       className="outline w-full h-8 rounded-md outline-amber-400 px-2 focus:outline-amber-500"
    //       onChange={(e) => setAge(e.target.value)}
    //       value={age}
    //     />
    //     <button className="outline px-6 rounded-md outline-amber-500 hover:outline-amber-700 hover:cursor-pointer py-1">
    //       Submit
    //     </button>
    //   </form>

    //   {friends.length > 0 &&
    //     friends.map((friend) => (
    //       <Card
    //         key={friend.name + friend.age}
    //         name={friend.name}
    //         age={friend.age}
    //       />
    //     ))}
    // </div>
    <CounterProvider>
      <h1>Parent</h1>
      <Counter />
      <CounterDisplay />
    </CounterProvider>
  );
}

export default App;

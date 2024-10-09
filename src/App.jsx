import { useState } from "React";

function App() {
  return (
    <div>
      <b>hi there</b>
      <Counter></Counter>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);

  function increaseCount() {
    // document.getElementById('text').innerHTML
    // we can do dom manipulation here but thats wrong whats the point of react
    // setCount = count++; --> wrong coz setCount is a function

    setCount(count + 1);
  }

  function decreaseCount() {
    setCount(count - 1);
  }

  function resetCount() {
    setCount(0);
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increaseCount}>Increase count</button>
      <button onClick={decreaseCount}>Decrease count</button>
      <button onClick={resetCount}>Reset count</button>
    </div>
  );
}

export default App;

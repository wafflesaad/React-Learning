import { useState } from "react";

interface Props{
    color: string,
    fontSize: string
}

function Counter(props: Props) {
  let [counter, setCounter] = useState(0);

  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  return (
    <div style={props}>
      <p>React Component</p>
      <button onClick={incrementCounter}>Click Me !!!</button>
      <br />
      <p>{counter}</p>
    </div>
  );
}

export default Counter;

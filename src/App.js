import { useState, useEffect } from "react";

export default function App() {
  //It's convention in react that the component's name is uppercase
  //Create a state
  const [advice, setAdvice] = useState("");
  let [counter, setCounter] = useState(0);

  async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdvice(data.slip.advice);
    setCounter((c) => c + 1);
  }

  useEffect(function () {
    getAdvice();
  }, []);

  return (
    //JSX
    <div>
      <h1>{advice}</h1>
      <button onClick={getAdvice}>get Advice</button>
      <Message counter={counter} />
    </div>
  );
}

function Message(props) {
  return (
    <p>
      How many times did i click it : <strong>{props.counter}</strong>
    </p>
  );
}

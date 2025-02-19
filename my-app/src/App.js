//import state and effect to dynamically change values of the advice and count
import { useEffect, useState } from "react";

export default function App() {
  //assigning initial value for advice and count
  const [advice, setAdvice] = useState("");
  const [count, setCount] = useState(0);
  //main function that has the API
  async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    //
    setAdvice(data.slip.advice);
    setCount((c) => c + 1);
  }

  useEffect(function () {
    getAdvice();
  }, []);

  return (
    <div>
      <h1>{advice}</h1>
      <button onClick={getAdvice}>Get Advice</button>
      <Message count={count} />
    </div>
  );
}

function Message(props) {
  return (
    <p>
      You have read <strong>{props.count}</strong> quotes.
    </p>
  );
}
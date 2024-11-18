import { useMemo, useState } from "react";
import { useCounter } from "../hooks";

const heavyStuff = (iterationNumber = 100) => {

  for (let i = 0; i < iterationNumber; i++) {
    console.log('ahi vamos');
  }

  return `${iterationNumber} iteraciones`; 
}


export const MemorizeHook = () => {
  const { counter, increment } = useCounter(4000);
  const [show, setShow] = useState(true);

  const memorizedValue = useMemo(() => heavyStuff(counter), [counter]);

  return (
    <>
      <h1>
        Counter: <small> {counter} </small>
      </h1>
      <hr />

      <h4> { memorizedValue } </h4>

      <button className="btn btn-primary" onClick={() => increment()}>
        Incrementar
      </button>

      <button className="btn btn-outline-danger" onClick={() => setShow(!show)}>
        Show/hide {JSON.stringify(show)}
      </button>
    </>
  );
};

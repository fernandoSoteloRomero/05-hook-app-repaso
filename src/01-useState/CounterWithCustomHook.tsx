import { useCounter } from "../hooks/useCounter";

export const CounterWithCustomHook = () => {

  const {counter, decrement, reset, increment} = useCounter(100);
  
  return (
    <>
      <h1>Counter With Hook: {counter} </h1>
      <hr />
      <button  onClick={increment} className="btn btn-primary">+1</button>
      <button  onClick={ reset } className="btn btn-danger">Reset</button>
      <button  onClick={ decrement } className="btn btn-secondary">-1</button>
    </>
  );
};

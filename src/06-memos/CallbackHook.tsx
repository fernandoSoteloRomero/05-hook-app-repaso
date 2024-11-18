import { useCallback, useState } from "react";
import { ShowIncrement } from "./ShowIncrement";

export const CallbackHook = () => {
  const [counter, setCounter] = useState(10);

  // const increment = () => {
  //   setCounter(counter + 1);
  // };

  const increment = useCallback((number:number) => {
    setCounter((c) => c + number);
  }, []);

  return (
    <>
      <div>useCallbackHook {counter} </div>
      <hr />
      <ShowIncrement increment={increment} />
    </>
  );
};

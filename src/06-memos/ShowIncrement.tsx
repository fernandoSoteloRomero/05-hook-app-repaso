import React from "react";

interface Props {
  increment: (number:number) => void;
}

export const ShowIncrement = React.memo(({ increment }: Props) => {
  console.log("me volvi a generar :(");
  return (
    <button className="btn btn-primary" onClick={() => increment(5)}>
      Incrementar
    </button>
  );
});

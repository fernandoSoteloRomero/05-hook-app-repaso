import { memo } from "react";

interface props {
  value: number;
}

export const Small = memo(({ value }: props) => {
  console.log("Me volvi a dibujar :(");
  return <small> {value} </small>;
});

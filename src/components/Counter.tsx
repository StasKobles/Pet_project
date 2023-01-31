import { useState } from "react";
import "./Counter.scss";
export const Counter = () => {
  const [value, setValue] = useState(0);
  const increment = () => {
    setValue(value + 1);
  };
  return (
    <div>
      <h1>{value}</h1>
      <button onClick={increment}>increment</button>
    </div>
  );
};

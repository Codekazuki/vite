import { useState } from "react";

const ErrorExample = () => {
  const [count, setCount] = useState(0);
  function handleIncrease() {
    setCount((c) => c + 1);
  }
  function handleDecrease() {
    setCount((c) => c - 1);
  }
  function handleReset() {
    setCount(0);
  }
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={handleIncrease}>increase</button>

      <button onClick={handleDecrease}>decrease</button>

      <button onClick={handleReset}>reset</button>
    </div>
  );
};

export default ErrorExample;

import { useState } from "react";

const ErrorExample = () => {
  const [count, setCount] = useState(0);
  function handleIncrease() {
    setCount(count + 1);
  }
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={handleIncrease}>increase</button>
    </div>
  );
};

export default ErrorExample;

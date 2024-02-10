import { useState } from "react";

const CodeExample = () => {
  const [value, setValue] = useState(0);

  return (
    <div>
      <h1>count : {value}</h1>
      <button className='btn' onClick={() => setValue((c) => c + 1)}>
        click me to add
      </button>
      <button className='btn' onClick={() => setValue(0)}>
        click me to reset
      </button>
      <button className='btn' onClick={() => setValue((c) => c - 1)}>
        click me subtract
      </button>
    </div>
  );
};
export default CodeExample;

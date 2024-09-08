import { useEffect, useState } from "react";

const UseEffectBasics = () => {
  const [value, setValue] = useState(0);
  const sayHello = () => {
    console.log("hello there");
  };

  sayHello();
  useEffect(() => {
    console.log("effect here");
  }, []);

  return (
    <div>
      <h1>count : {value}</h1>
      <button className='btn' onClick={() => setValue(value + 1)}>
        click me to Increase.
      </button>
    </div>
  );
};
export default UseEffectBasics;

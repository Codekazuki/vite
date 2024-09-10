import { useState } from "react";

const CleanupFunction = () => {
  const [toggle, setToggle] = useState(null);

  const handleToggle = () => {
    const position = toggle ? true : false;
    setToggle(position);
  };
  return (
    <div>
      <h1>hello</h1>

      <button
        className='btn'
        onClick={() => {
          handleToggle;
        }}
      >
        Toggle
      </button>
      <h1>{toggle ? Acomponent : AnotherComponent}</h1>
    </div>
  );
};
function Acomponent() {
  return <h1>Sample component</h1>;
}
function AnotherComponent() {
  return <h1>Sample component 222</h1>;
}

export default CleanupFunction;

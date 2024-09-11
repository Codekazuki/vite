import { useEffect } from "react";
import { useState } from "react";

const CleanupFunction = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <div>
      <h1>hello</h1>
      <button className='btn' onClick={handleToggle}>
        Toggle
      </button>
      {toggle && <Acomponent />}
    </div>
  );
};
function Acomponent() {
  useEffect(() => {
    console.log("checking for updates");
  }, []);
  return <h1>Sample component</h1>;
}
// function AnotherComponent() {
//   return <h1>Sample component 222</h1>;
// }

export default CleanupFunction;

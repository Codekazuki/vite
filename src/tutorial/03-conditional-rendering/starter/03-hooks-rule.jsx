import { useState, useEffect } from "react";

const Example = () => {
  const [condition, setCondition] = useState(true);
  if (condition) {
    // won't work
    const [state, setState] = useState(false);
  }
  const checkName = (name) => {
    return name || "anonymous";
  };
  console.log(checkName("Ayodele"));
  console.log(checkName());
  // if (condition) {
  //   return <h2>Hello There</h2>;
  // }
  // // this will also fail
  // useEffect(() => {
  //   console.log('hello there');
  // }, []);
  return <h2>example</h2>;
};

export default Example;

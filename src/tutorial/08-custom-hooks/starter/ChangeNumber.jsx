import UseToggle from "./UseToggle";

const ChangeNumber = () => {
  const { show, toggle } = UseToggle(true);
  return (
    <div>
      <h1>Number</h1>
      <button onClick={toggle}>Toggle Value</button>
      {show ? <h1>Click to Disappear</h1> : <h1>Click to Appear</h1>}
    </div>
  );
};

export default ChangeNumber;

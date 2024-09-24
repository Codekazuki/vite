import UseToggle from "./UseToggle";

const ChangeNumber = () => {
  const { show, toggle } = UseToggle(true);
  return (
    <div>
      <h1>Number</h1>
      <button onClick={toggle}>Toggle Value</button>
      {show && <h1>Appear and disappear</h1>}
    </div>
  );
};

export default ChangeNumber;

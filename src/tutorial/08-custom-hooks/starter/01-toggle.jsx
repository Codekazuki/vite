import UseToggle from "./UseToggle";
const ToggleExample = () => {
  const { show, toggle } = UseToggle(true);
  return (
    <div>
      <h4>toggle custom hook</h4>
      <button className='btn' onClick={toggle}>
        toggle
      </button>
      {show && <h4>some stuff</h4>}
    </div>
  );
};
export default ToggleExample;

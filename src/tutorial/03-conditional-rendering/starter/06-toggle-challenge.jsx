import { useState } from "react";
const ToggleChallenge = () => {
  const [address, setAddress] = useState(true);

  const toggleButton = () => {
    const changeAddress = address ? false : true;
    setAddress(changeAddress);
  };
  const home = "42 otunba adetilewa";
  const church = "32 ayo ajileye ";

  return (
    <div>
      <h1 className={address ? "person" : "people"}>
        {address ? home : church}
      </h1>
      <button className='btn' onClick={() => toggleButton()}>
        {" "}
        {address ? "show church address" : "show home address"}
      </button>

      {address && <Place />}
    </div>
  );
};

const Place = () => {
  return <h1>Hello World</h1>;
};

export default ToggleChallenge;

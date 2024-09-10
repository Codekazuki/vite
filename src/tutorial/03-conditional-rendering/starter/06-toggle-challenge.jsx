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
      <h1>{address ? home : church}</h1>
      <button
        style={{ backgroundColor: "orangered", padding: "20px" }}
        onClick={() => toggleButton()}
      >
        {" "}
        {address ? "show church address" : "show home address"}
      </button>
    </div>
  );
};

export default ToggleChallenge;

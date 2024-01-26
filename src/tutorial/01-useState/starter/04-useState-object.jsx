import { useState } from "react";
import { people } from "../../../data";

const UseStateObject = () => {
  const [name, setName] = useState("Ayodele");
  const [hobby, setHobby] = useState("Singing");
  const [age, setAge] = useState(35);
  function handleChangeUser() {
    setAge(40);
    setName("Femi");
    setHobby("playing Chess");
  }
  return (
    <div>
      {/* {people.map((person) => {
        const { name, id } = person;
        return <h1 key={id}>{name}</h1>;
      })} */}
      <h1>{name}</h1>
      <h1>{age}</h1>
      <h1>{hobby}</h1>
      <button type='button' onClick={handleChangeUser} className='btn'>
        Change User
      </button>
    </div>
  );
};

export default UseStateObject;

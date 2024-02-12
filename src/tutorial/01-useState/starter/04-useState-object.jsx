import { useState } from "react";
import { people } from "../../../data";

const UseStateObject = () => {
  const [list, setList] = useState(people);
  const [name, setName] = useState("Ayodele");
  const [hobby, setHobby] = useState("Singing");
  const [age, setAge] = useState(35);
  function handleChangeUser() {
    setAge(40);
    setName("Femi");
    setHobby("playing Chess");
  }
  const deleteFunction = (id) => {
    const neList = list.filter((person) => person.id !== id);
    setList(neList);
  };
  return (
    <div>
      <section className='people'>
        {list.map((person) => {
          const { name, id } = person;

          return (
            <h1 key={id}>
              {name} <button onClick={() => deleteFunction(id)}>hi</button>
            </h1>
          );
        })}
      </section>
      <section className='person'>
        <h1>{name}</h1>
        <h1>{age}</h1>
        <h1>{hobby}</h1>
      </section>
      <button type='button' onClick={handleChangeUser} className='btn'>
        Change User
      </button>
    </div>
  );
};

export default UseStateObject;

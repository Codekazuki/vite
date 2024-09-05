import { useState } from "react";

const UseStateGotcha = () => {
  const [person, setPerson] = useState({
    age: 29,
    name: "Adenike",
    church: "C.A.C",
  });

  // const [name, setName] = useState("Mojisola");
  // const [age, setAge] = useState(29);
  // const [church, setChurch] = useState("Jesus Link");

  const handlePerson = () => {
    setPerson({ age: 30, church: "house on the rock", name: "Gbemi" });
    // setAge(30);
    // setChurch("Gloryland");
    // setName("Temitope");
  };

  return (
    <div>
      <h1>{person.name}</h1>
      <h1>{person.age}</h1>
      <h1>{person.church}</h1>
      <button className='btn' onClick={handlePerson}>
        change person
      </button>
    </div>
  );
};

export default UseStateGotcha;

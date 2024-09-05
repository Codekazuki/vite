import React, { useState } from "react";
import { data } from "../../../data";

const UseStateBasics = () => {
  const [people, setPeople] = useState(data);

  const handleClrearList = () => {
    setPeople([]);
  };
  function deleteName(id) {
    const newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  }

  return (
    <div>
      {people.map((person) => {
        const { name, id } = person;
        return (
          <div key={id}>
            <h1>{name}</h1>
            <button onClick={() => deleteName(id)}>remove</button>
          </div>
        );
      })}
      <button onClick={handleClrearList} className='btn'>
        Clearlist
      </button>
    </div>
  );
};

export default UseStateBasics;

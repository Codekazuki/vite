import { useState } from "react";
import { data } from "./data";
const Mpa = () => {
  const [name, setName] = useState(data);
  const handleDelete = (id) => {
    console.log(id);
    const newPeople = name.filter((person) => person.id !== id);
    setName(newPeople);
  };
  const handleDeleteAll = () => {
    setName([]);
  };
  return (
    <div>
      {name.map((person) => {
        const { name, id } = person;
        return (
          <>
            <div key={id}>
              <h1>{name}</h1>
              <button onClick={() => handleDelete(id)}>delete</button>
            </div>
          </>
        );
      })}
      <button onClick={handleDeleteAll}>clear all</button>
    </div>
  );
};

export default Mpa;

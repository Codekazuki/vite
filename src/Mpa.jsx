import { useState } from "react";
import { data } from "./data";
import { people } from "./data";
const Mpa = () => {
  const [name, setName] = useState(data);
  const [pipu, setPipu] = useState(people);
  console.log(setPipu);
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

      <div>
        {pipu.map((people) => {
          const { id, age, hobby, name } = people;
          return (
            <div key={id}>
              <h1>{name}</h1>
              <h2>{age}</h2>
              <h3>{hobby}</h3>
              <button>Chnage color</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Mpa;

import { useState } from "react";
import { data } from "./data";
const Mpa = () => {
  const [name, setName] = useState(data);
  const handleDelete = () => {};
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
              <button onClick={handleDelete}>delete</button>
            </div>
            <button onClick={handleDeleteAll}>delete all</button>
          </>
        );
      })}
    </div>
  );
};

export default Mpa;

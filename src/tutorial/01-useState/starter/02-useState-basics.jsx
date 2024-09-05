import { useState } from "react";
import { data } from "../../../data";

const UseStateBasics = () => {
  const [people, setPeople] = useState(data);

  const handleClearAll = () => {
    setPeople([]);
  };
  const handleDelete = () => {
    console.log("hi");
  };

  return (
    <div>
      {people.map((person) => {
        const { name, id } = person;
        return (
          <div key={id}>
            <h1>{name}</h1>
            <button onClick={handleDelete}>delete name</button>
          </div>
        );
      })}
      <button className='btn' onClick={handleClearAll}>
        DELETE ALL
      </button>
    </div>
  );
};

export default UseStateBasics;

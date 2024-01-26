import { useState } from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  const [people, setPeople] = useState(data);
  const handleDelete = (id) => {
    setPeople(people.filter((person) => person.id !== id));
  };
  const handleClearList = () => {
    setPeople([]);
  };
  return (
    <div>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <>
            <h1 key={id}>{name}</h1>
            <button onClick={() => handleDelete(id)}>remove</button>
          </>
        );
      })}
      <button onClick={handleClearList} className='btn'>
        clear list
      </button>
    </div>
  );
};

export default UseStateArray;

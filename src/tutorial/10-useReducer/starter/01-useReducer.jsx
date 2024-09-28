import React from "react";
import { data } from "../../../data";
const ReducerBasics = () => {
  const [people, setPeople] = React.useState(data);

  const removeItem = (id) => {
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };
  const resetHandle = () => {
    setPeople(data);
  };
  return (
    <section>
      <div>
        {people.map((person) => {
          const { id, name } = person;
          return (
            <div key={id} className='item'>
              <h4>{name}</h4>
              <button onClick={() => removeItem(id)}>remove</button>
            </div>
          );
        })}
        {people.length === 0 ? (
          <button className='btn' onClick={resetHandle}>
            Reset
          </button>
        ) : (
          <button
            className='btn'
            style={{ marginTop: "2rem" }}
            onClick={() => setPeople([])}
          >
            clear items
          </button>
        )}
      </div>
    </section>
  );
};

export default ReducerBasics;

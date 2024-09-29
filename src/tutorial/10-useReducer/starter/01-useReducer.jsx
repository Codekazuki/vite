import React, { useReducer, useState } from "react";
import { data, people } from "../../../data";

const ReducerBasics = () => {
  const defaultState = () => {
    people: data;
  };

  const reducer = () => {};

  const [state, dispatch] = useReducer(reducer, defaultState);

  const removeItem = (id) => {};
  const resetHandle = () => {};
  const clearList = () => {};
  return (
    <section>
      <div>
        {state.people.map((person) => {
          const { id, name } = person;
          return (
            <div key={id} className='item'>
              <h4>{name}</h4>
              <button onClick={() => removeItem(id)}>remove</button>
            </div>
          );
        })}
        {state.people.length === 0 ? (
          <button className='btn' onClick={resetHandle}>
            Reset
          </button>
        ) : (
          <button
            className='btn'
            style={{ marginTop: "2rem" }}
            onClick={clearList}
          >
            clear items
          </button>
        )}
      </div>
    </section>
  );
};

export default ReducerBasics;

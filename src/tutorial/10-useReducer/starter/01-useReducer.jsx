import { useReducer, useState } from "react";
import { data, people } from "../../../data";

const CLEAR_LIST = "CLEAR_LIST";
const RESET_LIST = "RESET_LIST";
const REMOVE_ITEM = "REMOVE_ITEM";
const defaultState = {
  people: data,
  isLoading: false,
};
const reducer = (state, action) => {
  if (action.type === CLEAR_LIST) {
    return { ...state, people: [] };
  }
  if (action.type === RESET_LIST) {
    return {
      ...state,
      people: data,
    };
  }
  if (action.type === REMOVE_ITEM) {
    let newList = state.people.filter(
      (person) => person.id !== action.payload.id
    );
    return {
      ...state,
      people: newList,
    };
  }
  return state;
};
const ReducerBasics = () => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  const removeItem = (id) => {
    dispatch({ type: REMOVE_ITEM, payload: { id } });
  };
  const resetList = () => {
    dispatch({ type: RESET_LIST });
  };
  const clearList = () => {
    dispatch({ type: CLEAR_LIST });
  };
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
          <button className='btn' onClick={resetList}>
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

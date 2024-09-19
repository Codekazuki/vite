import { useEffect, useRef, useState } from "react";

const UseRefBasics = () => {
  const [value, setValue] = useState(0);
  const [name, setName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    setName("");
  };

  return (
    <div>
      <form className='form' onSubmit={handleSubmit}>
        <div className='form-row'>
          <label htmlFor='name' className='form-label'>
            Name
          </label>
          <input
            placeholder='write name here'
            id='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            type='text'
            className='form-input'
          />
        </div>
        <button type='submit' className='btn btn-block'>
          submit
        </button>
      </form>
      <h1>value : {value}</h1>
      <button onClick={() => setValue(value + 1)} className='btn'>
        increase
      </button>
    </div>
  );
};

export default UseRefBasics;

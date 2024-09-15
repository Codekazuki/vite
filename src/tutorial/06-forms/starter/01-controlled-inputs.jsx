import { useState } from "react";

const ControlledInputs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const handleChangeName = (e) => {
    setName(e.target.value);
  };
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email);
  };
  return (
    <form className='form' onSubmit={handleSubmit}>
      <h1>Controlled Input</h1>

      <div className='form-row'>
        <label htmlFor='name' className='form-label'>
          name
        </label>
        <input
          placeholder='input your name'
          id='name'
          value={name}
          onChange={handleChangeName}
          type='text'
          className='form-input'
        />
      </div>
      <div className='form-row'>
        <label htmlFor='email' className='form-label'>
          email
        </label>
        <input
          placeholder='input your email'
          id='email'
          value={email}
          onChange={handleChangeEmail}
          type='email'
          className='form-input'
        />
      </div>
      {/* <div className='form-row'>
        <label htmlFor='password' className='form-label'>
          Password
        </label>
        <input
          id='password'
          type='password'
          className='form-input'
          placeholder='input your name'
        />
      </div> */}
      <button type='submit' className='btn btn-block'>
        {" "}
        submit
      </button>
    </form>
  );
};
export default ControlledInputs;

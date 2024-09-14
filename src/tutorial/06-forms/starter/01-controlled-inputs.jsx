const ControlledInputs = () => {
  return (
    <form className='form'>
      <h1>Controlled Input</h1>

      <div className='form-row'>
        <label htmlFor='name' className='form-label'>
          name
        </label>
        <input
          id='name'
          type='text'
          className='form-input'
          placeholder='input your name'
        />
      </div>
      <div className='form-row'>
        <label htmlFor='email' className='form-label'>
          email
        </label>
        <input
          id='email'
          type='email'
          className='form-input'
          placeholder='input your name'
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

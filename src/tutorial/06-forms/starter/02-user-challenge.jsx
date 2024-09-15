import { data } from "../../../data";
import { useState } from "react";

const UserChallenge = () => {
  const [user, setUser] = useState(data);
  const handleName = (e) => {
    setUser(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
  };

  return (
    <div>
      <form className='form'>
        <h4>Add User</h4>
        <div className='form-row'>
          <label htmlFor='name' className='form-label'>
            name
          </label>
          <input
            placeholder='input name here'
            id='name'
            value={user}
            onChange={handleName}
            type='text'
            className='form-input'
          />
        </div>

        <button type='submit' onClick={handleSubmit} className='btn btn-block'>
          submit
        </button>
      </form>
      {/* render users below */}
    </div>
  );
};
export default UserChallenge;

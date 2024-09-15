import { data } from "../../../data";
import { useState } from "react";

const UserChallenge = () => {
  const [user, setUser] = useState("");
  const [users, setUsers] = useState(data);
  const handleName = (e) => {
    setUser(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted");
  };

  return (
    <div>
      <form className='form' onSubmit={handleSubmit}>
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

        <button type='submit' className='btn btn-block'>
          submit
        </button>
      </form>

      <div>
        <h1>Users</h1>
        {users.map((person) => {
          const { id, name } = person;
          return (
            <div key={id}>
              <h1>{name}</h1>
              <button className='btn'>{name}&apos;s details</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default UserChallenge;

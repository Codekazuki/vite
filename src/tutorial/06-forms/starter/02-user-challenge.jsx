import { data } from "../../../data";
import { useState } from "react";

const UserChallenge = () => {
  const [name, setName] = useState("");
  const [users, setUsers] = useState(data);

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!users) return;
    const fakeId = Date.now();
    const newPerson = { id: fakeId, name };
    const updatedUsers = [...users, newPerson];
    setUsers(updatedUsers);
    setName("");
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
            value={name}
            onChange={handleName}
            type='text'
            className='form-input'
          />
        </div>

        <button type='submit' className='btn btn-block'>
          submit
        </button>
      </form>

      <h1>Users</h1>
      {users.map((person) => {
        const { id, name } = person;
        return (
          <div key={id}>
            <h1>{name}</h1>
            {/* <button className='btn'>{name}&apos;s details</button> */}
          </div>
        );
      })}
    </div>
  );
};
export default UserChallenge;

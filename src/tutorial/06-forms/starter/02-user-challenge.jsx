import { data } from "../../../data";
import { useState } from "react";

const UserChallenge = () => {
  const [name, setName] = useState("");
  const [users, setUsers] = useState(data);
  console.log(data);

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
  const handleDelete = (id) => {
    const newArray = users.filter((update) => update.id !== id);
    setUsers(newArray);
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
      {users.length === 0
        ? "No user at the moment"
        : users.map((person) => {
            const { id, name } = person;
            return (
              <div key={id}>
                <h1>{name}</h1>
                <button onClick={() => handleDelete(id)} className='btn'>
                  ❌ Delete {name}
                </button>
              </div>
            );
          })}
    </div>
  );
};
export default UserChallenge;

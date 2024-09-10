import { useState } from "react";

const UserChallenge = () => {
  const [user, setUser] = useState(null);

  const login = () => {
    setUser(name);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <div>
      {user ? (
        <div>
          <h1>Welcome{user.name} </h1>
          <button className='btn' onClick={logout}>
            logout
          </button>
        </div>
      ) : (
        <div>
          <h1> Please login </h1>
          <button className='btn' onClick={login}>
            login
          </button>
        </div>
      )}
    </div>
  );
};

export default UserChallenge;

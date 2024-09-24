const UserContainer = ({ logOut, user }) => {
  return (
    <div>
      <button className='btn' onClick={logOut}>
        Logout
      </button>
      <h1>Hello dear {user.name}</h1>
    </div>
  );
};

export default UserContainer;

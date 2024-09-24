const UserContainer = ({ logOut, user }) => {
  return (
    <div>
      <button className='btn' onClick={logOut}>
        Logout
      </button>
      {user ? <h1>hello</h1> : <h1>hi</h1>}
    </div>
  );
};

export default UserContainer;

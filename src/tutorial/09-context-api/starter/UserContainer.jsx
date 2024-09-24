const UserContainer = ({ logOut, user }) => {
  return (
    <div className='user-container'>
      {user ? (
        <>
          <p>Hello {user?.name?.toUpperCase()}</p>
          <button className='btn' onClick={logOut}>
            Logout
          </button>
        </>
      ) : (
        <p>Please Login with your credentials</p>
      )}
    </div>
  );
};

export default UserContainer;

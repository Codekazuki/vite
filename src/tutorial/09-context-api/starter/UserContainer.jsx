const UserContainer = ({ logOut, name }) => {
  return (
    <div>
      {name}
      <button onClick={logOut}>lOGoUT</button>
    </div>
  );
};

export default UserContainer;

import UserContainer from "./UserContainer";

const NavLinks = ({ logOut, user }) => {
  return (
    <div className='nav-container'>
      <a href='#'>Home</a>
      <a href='#'>About</a>

      <UserContainer user={user} logOut={logOut} />
    </div>
  );
};

export default NavLinks;

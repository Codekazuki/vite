import UserContainer from "./UserContainer";

const NavLinks = ({ logOut, user }) => {
  return (
    <div>
      <UserContainer user={user} logOut={logOut} />
    </div>
  );
};

export default NavLinks;

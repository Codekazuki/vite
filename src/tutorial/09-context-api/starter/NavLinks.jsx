import UserContainer from "./UserContainer";

const NavLinks = ({ logOut, name }) => {
  return (
    <div>
      <UserContainer name={name} logOut={logOut} />
    </div>
  );
};

export default NavLinks;

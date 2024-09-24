import { useState } from "react";
import NavLinks from "./NavLinks";

const Navbar = () => {
  const name = "something";
  const [user, setUser] = useState(name);
  const logOut = () => {
    console.log("I don comot my hand");
    setUser(null);
  };

  return (
    <div>
      <NavLinks user={user} logOut={logOut} />
    </div>
  );
};

export default Navbar;

import { useState } from "react";
import NavLinks from "./NavLinks";

const Navbar = () => {
  const [user, setUser] = useState({ name: "Coach" });
  const logOut = () => {
    console.log("I don comot my hand");
    setUser(null);
  };

  return (
    <nav className='navbar'>
      <h5>CONTEXT API</h5>
      <NavLinks user={user} logOut={logOut} />
    </nav>
  );
};

export default Navbar;

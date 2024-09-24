import { useState } from "react";
import NavLinks from "./NavLinks";

const Navbar = () => {
  const [name, setName] = useState("something");
  const logOut = () => {
    console.log("I don comot my hand");
    setName(null);
  };

  return (
    <div>
      <h1>{name}</h1>
      <NavLinks name={name} logOut={logOut} />
    </div>
  );
};

export default Navbar;

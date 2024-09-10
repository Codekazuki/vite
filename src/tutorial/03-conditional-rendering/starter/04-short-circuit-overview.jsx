import { useState } from "react";

const ShortCircuitOverview = () => {
  const [value, setValue] = useState("Strong");
  const [text, setText] = useState("");

  return (
    <div>
      <h1>Truthy VALUE {value || "Lampard"}</h1>
      <h1>Truthy VALUE {value && "Lampard"}</h1>
      <h1>FAlsy {text || "gerrard"}</h1>
      <h1>FAlsy {text && "gerrard"}</h1>
    </div>
  );
};
export default ShortCircuitOverview;

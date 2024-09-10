import { useEffect, useState } from "react";

const ShortCircuitExamples = () => {
  // falsy
  const [text, setText] = useState("");
  // truthy
  const [name, setName] = useState("susan");
  const [user, setUser] = useState({ name: "John" });
  const [isEditing, setIsEditing] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsEditing(true);
    }, 5000);
  }, []);

  return (
    <div>
      <h2>{text || "John Doe"}</h2>
      <div>{user && "This is interesting"}</div>
      <div>
        {isEditing && (
          <div>
            <h1>{name}</h1>
            <p>THIS IS COOL</p>
          </div>
        )}
      </div>
      <button style={{ backgroundColor: "greenyellow", padding: "8px 16px" }}>
        {user ? "Submit" : "Edit"}
      </button>
      {user ? <h1> Welcome {user.name} </h1> : <h1>Please login</h1>}
    </div>
  );
};

export default ShortCircuitExamples;

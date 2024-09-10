import { useEffect, useState } from "react";
const url = "https://api.github.com/users/QuincyLarson";

const MultipleReturnsFetchData = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const resp = await fetch(url);
        const user = await resp.json();
        console.log(user);
      } catch (error) {
        console.log("there is error");
      }
    };
    fetchUser();
  }, []);

  return user.map((user) => {
    const { id, bio, avatar_url } = user;
    return (
      <div key={id}>
        <img src={avatar_url} alt='' />
        <h1>{bio}</h1>
        <p></p>
      </div>
    );
  });
};
export default MultipleReturnsFetchData;

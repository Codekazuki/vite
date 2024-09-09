import { useEffect } from "react";
import { useState } from "react";

const url = "https://api.github.com/users";

const FetchData = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const users = await response.json();
        setUsers(users);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return (
    <ul>
      {users.map((user) => {
        const { id, login, html_url, avatar_url, followers_url } = user;
        return (
          <li key={id}>
            <img style={{ height: "60px" }} src={avatar_url} alt='' />
            <a href={html_url}>profile</a>
            <h1>{login}</h1>
            <a href={followers_url}>check {login}'s followers</a>
          </li>
        );
      })}
    </ul>
  );
};
export default FetchData;

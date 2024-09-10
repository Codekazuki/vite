import { useEffect, useState } from "react";
const url = "https://api.github.com/users/QuincyLarson";

const MultipleReturnsFetchData = () => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const resp = await fetch(url);
        if (!resp.ok) {
          setIsLoading(false);
          setIsError(true);
          return;
        }
        const user = await resp.json();
        setUser(user);
      } catch (error) {
        console.log("there is error");
        setIsError(true);
      }
      setIsLoading(false);
    };
    fetchUser();
  }, []);
  if (isLoading) {
    return <h1>data is loading</h1>;
  }
  if (isError) {
    return <h2>Ooops! en error just occured</h2>;
  }
  return (
    <div>
      <img
        style={{ width: "192px", borderRadius: "20px" }}
        src={user.avatar_url}
        alt=''
      />
      <h1>{user.name}</h1>
      <h4>{user.bio}</h4>
      <h4>{user.location}</h4>
    </div>
  );
};
export default MultipleReturnsFetchData;

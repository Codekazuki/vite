import { useEffect, useState } from "react";

const MultipleReturnsBasics = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  if (isLoading) {
    return <h1>data is loading, please calm down</h1>;
  }
  return <h2>Multiple Returns Basics @ conditional rendering </h2>;
};
export default MultipleReturnsBasics;

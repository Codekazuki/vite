import { useEffect, useState } from "react";
import "./App.css";

import Starter from "./tutorial/03-conditional-rendering/starter/02-multiple-returns-fetch-data";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  if (isLoading) {
    return <h1>data is loading</h1>;
  }
  return (
    <div className='container'>
      <Starter />
    </div>
  );
}

export default App;

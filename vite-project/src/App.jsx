import Questions from "../component/question/question";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("http://localhost:3000/questions");
      const result = await response.json();
      setData(result);
    }
    fetchData();
  }, [data]);
  return (
    <>
      <Questions data={data} />
    </>
  );
}

export default App;

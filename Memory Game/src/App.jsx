import { useState, useEffect } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";

function App() {
  const [data, setData] = useState("");

  function handleClick() {
    fetch(
      "https://api.giphy.com/v2/emoji?api_key=bqBUyRy9Wth6rjzWQfbNInLdwKct9APl&limit=10&offset=0"
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setData(data.data[0].url);
      })
      .catch(console.error);
  }
  console.log(data);

  return (
    <>
      <button onClick={handleClick}>Click me</button>
      <img src={data} id="pic" alt="" />
    </>
  );
}

export default App;

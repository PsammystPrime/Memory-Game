import { useState, useEffect } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";

export function Header() {
  const [score, setScore] = useState(0);

  function addScore() {
    if (score === 10) {
      console.log("Congrats"), setScore(0);
    } else {
      setScore(score + 1);
    }
  }
  return (
    <>
      <div>
        <h1>Memory Game</h1>
        <h2>Designed to test your memory</h2>
        <h3>Rules</h3>
        <p>
          Click each item once to proceed. Clicking an item twice will reset
          your score to zero
        </p>
      </div>
      <div className="scores">
        <p>Scores: {score}</p>
        <button onClick={addScore}>Add Score</button>
      </div>
    </>
  );
}

export function Main() {
  const [data, setData] = useState("");

  // function handleClick() {
  useEffect(() => {
    fetch(
      "https://api.giphy.com/v2/emoji?api_key=bqBUyRy9Wth6rjzWQfbNInLdwKct9APl&limit=9&offset=0"
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        // console.log(data.data);
        setData(data.data);
      })
      .catch(console.error);
  }, []);

  console.log(data);

  return (
    <>
      <button onClick={"handleClick"}>Click me</button>
      <div>
        {data &&
          data.map((item) => (
            <img
              src={item.images.preview_gif.url}
              id="pic"
              key={item.id}
              alt=""
            />
          ))}
      </div>
    </>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <Main />
    </>
  );
}

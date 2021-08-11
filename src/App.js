import "./styles.css";
import React, { useState } from "react";

const emojiDictionary = {
  "😀": "Grinning Face",
  "😆": "Grinning Squinting Face",
  "🤣": "Rolling on the Floor Laughing",
  "😍": "Smiling Face with Heart-Eyes",
  "😛": "Face with Tongue",
  "😝": "Squinting Face with Tongue",
  "😜": "Winking Face with Tongue",
  "🙄": "Face with Rolling Eyes",
  "🤐": "Zipper-Mouth Face"
};

const emojiArray = Object.keys(emojiDictionary);

console.log(typeof emojiArray);
console.log(typeof emojiArray[0]);

export default function App() {
  const [meaning, setMeaning] = useState("");
  const inputHandler = (event) => {
    let emoji = event.target.value;
    let meaning = emojiDictionary[emoji];
    if (meaning === undefined) {
      meaning = "Sorry, data does not exist in our database...😐";
    }
    setMeaning(meaning);
  };
  const clickHandler = (emoji) => {
    // console.log(emoji);
    // console.log(typeof emoji);
    let meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  };
  return (
    <div className="App">
      <h1>Emoji Interpreter</h1>
      <input placeholder="put your emoji here...🙃" onChange={inputHandler} />
      <div className="block">{meaning}</div>
      {emojiArray.map((item) => (
        <span
          key={item}
          onClick={() => clickHandler(item)}
          style={{ fontSize: "2rem", cursor: "pointer", margin: ".5rem" }}
        >
          {item}
        </span>
      ))}
    </div>
  );
}

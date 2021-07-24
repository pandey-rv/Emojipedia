import "./styles.css";
import React, { useState } from "react";

export default function App() {
  var emojiDictionary = {
    "😊": "Smiling",
    "😳": "disbelief",
    "😔": "sad",
    "🥡": "takeout box",
    "❤️": "love",
    "😑": "annoyance"
  };
  var [meaning, setMeaning] = useState("");

  // var [userInput, setUserInput] = useState(0);

  function inputChangeHandler(event) {
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];

    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Inside Outt!!!</h1>
      <input onChange={inputChangeHandler} />
      <div>
        Meaning<h1> {meaning} </h1>
      </div>
    </div>
  );
}

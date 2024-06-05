import "./App.css";
import { useState } from "react";

function App() {
  const [greeting, setGreeting] = useState("Greeting Message");
  const [input, setInput] = useState("");

  return (
    <div className="App">
      <div className="greeting-container">{greeting}</div>
      <div className="input-container">
        <label htmlFor="greeting-message">New Greeting Message</label>
        <input
          id="greeting-message"
          type="text"
          value={input}
          onChange={(event) => {
            setInput(event.target.value);
          }}
        />
      </div>

      <div className="buttons">
        <button
          onClick={() => {
            setGreeting(message);
          }}
        >
          Update text
        </button>
      </div>
    </div>
  );
}

export default App;

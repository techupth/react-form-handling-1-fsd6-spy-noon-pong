import "./App.css";
import { useState } from "react";

function App() {
  const [message,setGreeting] = useState("")
  const [show,setShow] = useState("Greeting Message")
  return (
    <div className="App">
      <div className="greeting-container">{show}</div>
      <div className="input-container">
        <label htmlFor="greeting-message">New Greeting Message</label>
        <input id="greeting-message" type="text" value={message} onChange={(event)=>{setGreeting(event.target.value)}} />
      </div>

      <div className="buttons">
        <button onClick={()=>{setShow(message)}}>Update text</button>
      </div>
    </div>
  );
}

export default App;

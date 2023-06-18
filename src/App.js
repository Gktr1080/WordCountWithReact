import { useState } from "react";
import "./App.css";
function App() {
  const [text, setText] = useState("");
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  return (
    <>
      <div className="container my-4">
        <div className="mb-4">
          <label for="exampleFormControlTextarea1" class="form-label">
            Responsive Word Counter
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            value={text}
            onChange={handleOnChange}
          ></textarea>
        </div>
        <p>Word Count {text.split(" ").length - 1}</p>
      </div>
    </>
  );
}

export default App;

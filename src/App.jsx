import React from "react";
import tasksData from "./tasksData";
import "./App.css";
import Center from "./Center";
let idData = 6;

function App() {
  let [data, setData] = React.useState(tasksData);
  let [textval, setTextval] = React.useState("");
  function textChange(e) {
    setTextval(e.target.value);
  }
  function createClick() {
    if (textval) {
      setData((prevElem) => {
        return [{ id: idData, para: textval, completed: false }, ...prevElem];
      });
      setTextval("");
      idData++;
    }
  }
  function modeChange(e) {
    let backgroundColor = document.querySelector(".total-content");
    if (e.target.checked) {
      backgroundColor.style.backgroundColor = "hsl(0, 0%, 98%)";
    } else {
      backgroundColor.style.backgroundColor = "hsl(235, 21%, 11%)";
    }
  }
  return (
    <div className="total-content">
      <input
        className="theame-switch"
        onClick={modeChange}
        type="checkbox"
      ></input>
      <div className="theame-div"></div>
      <div className="background-container">
        <div className="background-img-container"></div>
      </div>
      <div className="top-total-container">
        <div className="title">
          <h1>TODO</h1>
        </div>
        <div className="create-todo">
          <input
            onChange={textChange}
            value={textval}
            className="create-textbox"
            type="text"
            placeholder="Create a new todo..."
          ></input>
          <button onClick={createClick}>Create</button>
        </div>
        <Center data={data} setData={setData} />
      </div>
    </div>
  );
}

export default App;

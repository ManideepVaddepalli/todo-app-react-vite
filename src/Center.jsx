import React from "react";
import tasksData from "./tasksData";
import { ReactSortable } from "react-sortablejs";
import Centersingle from "./Centersingle";

export default function Center(props) {
  let [countTask, setCountTask] = React.useState(props.data.length);
  // let [data, setData] = React.useState(tasksData);
  function handleChecked(e) {
    let newData = props.data.map((elem) => {
      if (elem.id == e.target.name) {
        return {
          ...elem,
          completed: e.target.checked,
        };
      } else {
        return elem;
      }
    });
    props.setData(newData);
  }
  let mappedElem = props.data.map((Elem, index) => (
    <Centersingle
      key={Elem.id}
      id={index}
      para={Elem.para}
      name={Elem.id}
      completed={Elem.completed}
      checked={handleChecked}
      data={props.data}
      setData={props.setData}
    />
  ));
  let [filter, setFilter] = React.useState({
    all: true,
    active: false,
    complete: false,
  });
  function filterChanged(e) {
    let tempCount = 0;
    setFilter({
      all: false,
      active: false,
      complete: false,
      [e.target.value]: true,
    });
    let centerItems = document.querySelectorAll(".single-container");
    switch (e.target.value) {
      case "all":
        centerItems.forEach((elem) => {
          elem.classList.remove("hide");
        });
        setCountTask(props.data.length);
        break;
      case "active":
        centerItems.forEach((elem) => {
          elem.classList.remove("hide");
        });
        centerItems.forEach((elem) => {
          if (elem.childNodes[0].childNodes[0].checked) {
            tempCount++;
            elem.classList.add("hide");
          }
        });
        setCountTask(props.data.length - tempCount);
        break;
      case "complete":
        centerItems.forEach((elem) => {
          elem.classList.remove("hide");
        });
        centerItems.forEach((elem) => {
          if (!elem.childNodes[0].childNodes[0].checked) {
            tempCount++;
            elem.classList.add("hide");
          }
        });
        setCountTask(props.data.length - tempCount);
        break;
    }
  }
  function clearComplete() {
    var result = confirm(
      "Do you want to clear completed Tasks? This process is irreversable"
    );
    if (result) {
      let completeData = props.data.filter((elem) => !elem.completed);
      props.setData(completeData);
    }
  }

  return (
    <>
      <div className="center-content">
        <ReactSortable list={props.data} setList={props.setData}>
          {mappedElem}
        </ReactSortable>
        <div className="last-line">
          <p>{countTask} items left</p>

          <p onClick={clearComplete} className="clear-complete">
            Clear Completed
          </p>
        </div>
      </div>
      <div className="lastline-center">
        <div className="bottom-all bottom-common">
          <input
            onChange={filterChanged}
            checked={filter.all}
            value="all"
            type="radio"
          ></input>
          <p className="bot-options">All</p>
        </div>
        <div className="bottom-active bottom-common">
          <input
            onChange={filterChanged}
            checked={filter.active}
            value="active"
            type="radio"
          ></input>
          <p className="bot-options">Active</p>
        </div>
        <div className="bottom-complete bottom-common">
          <input
            checked={filter.complete}
            onChange={filterChanged}
            value="complete"
            type="radio"
          ></input>
          <p className="bot-options">Complete</p>
        </div>
      </div>
    </>
  );
}

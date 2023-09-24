import React, { useState } from "react";
import { useRef } from "react";

export default function Centersingle(props) {
  function removeBtn(e) {
    console.log(e.target.name);
    let newData = props.data.filter((elem) => {
      return elem.id != e.target.name;
    });
    props.setData(newData);
  }
  return (
    <div className="single-container" key={props.id}>
      <div className="left-btn-container" draggable="false">
        <input
          name={props.name}
          onChange={props.checked}
          checked={props.completed}
          type="checkbox"
        ></input>
        <div className="visual-checkbox"></div>
        <p>{props.para}</p>
      </div>
      <button name={props.name} onClick={removeBtn}>
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17">
          <path
            fill="#494C6B"
            fillRule="evenodd"
            d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"
          />
        </svg>
      </button>
    </div>
  );
}

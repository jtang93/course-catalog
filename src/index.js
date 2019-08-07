import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import CourseList from "./courseList.js";
import Tags from "./tags.js";

function App() {
  const [clickedTag, setClickedTag] = useState(null);
  const [activeButton, setActiveButton] = useState(null);

  const clickHandler = e => {
    if (clickedTag === e.target.id) {
      setClickedTag(null);
    } else {
      setClickedTag(e.target.id);
    }

    if (activeButton === e.target) {
      e.target.dataset.active = "false";
      setActiveButton(null);
    } else if (activeButton === null) {
      setActiveButton(e.target);
      e.target.dataset.active = "true";
    } else {
      activeButton.dataset.active = "false";
      setActiveButton(e.target);
      e.target.dataset.active = "true";
    }
  };

  return (
    <div className="App">
      <h1 className="header">Course Catalog</h1>
      <Tags clickHandler={clickHandler} />
      <CourseList clickedTag={clickedTag} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

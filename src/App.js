import React from "react";
import "./App.css";
import Fields from "./components/Fields";
import Menu from "./components/Menu";
import Output from "./components/Output";
import shortText from "./assets/icons/short-text-icon.png";
import numberIcon from "./assets/icons/number-icon.png";
import multipleChoice from "./assets/icons/multiple-choice-icon.png";
import singleChoice from "./assets/icons/single-choice-icon.png";

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="form-header text-center">
            <h2>Sample Survey Form</h2>
            <p>Form Description</p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col col-2">
          <Menu id="menu" className="menu">
            <Fields id="text" className="field-element" draggable="true">
              <div className="field-icon">
                <img src={shortText} alt="Short Text Icon" />
              </div>
              <div className="field-text">Short Text</div>
            </Fields>
            <Fields id="radio" className="field-element" draggable="true">
              <div className="field-icon">
                <img src={singleChoice} alt="Single Choice Icon" />
              </div>
              <div className="field-text">Single Choice</div>
            </Fields>
            <Fields id="checkbox" className="field-element" draggable="true">
              <div className="field-icon">
                <img src={multipleChoice} alt="Multiple Choice Icon" />
              </div>
              <div className="field-text">Multiple Choice</div>
            </Fields>
            <Fields id="number" className="field-element" draggable="true">
              <div className="field-icon">
                <img src={numberIcon} alt="Number Icon" />
              </div>
              <div className="field-text">Number</div>
            </Fields>
          </Menu>
        </div>
        <div className="col col-8">
          <Output id="form" className="form"></Output>
        </div>
      </div>
    </div>
  );
}

export default App;

import React from "react";
import "./App.css";
import Menu from "./components/Menu";
import Output from "./components/Output";

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="form-header text-center">
            <h2
              contentEditable
              suppressContentEditableWarning
              onBlur={(e) => console.log(e.currentTarget.textContent)}
              onKeyPress={(e) => {
                if (e.key === "13" || e.key === "Enter") {
                  e.preventDefault();
                  e.target.blur();
                }
              }}
            >
              Sample Survey Form
            </h2>
            <p
              contentEditable
              suppressContentEditableWarning
              onBlur={(e) => console.log(e.currentTarget.textContent)}
              onKeyPress={(e) => {
                if (e.key === "13" || e.key === "Enter") {
                  e.preventDefault();
                  e.target.blur();
                }
              }}
            >
              Form Description
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col col-2">
          <Menu id="menu" className="menu"></Menu>
        </div>
        <div className="col col-8">
          <Output id="form" className="form"></Output>
        </div>
      </div>
    </div>
  );
}

export default App;

import React from "react";
import Fields from "./Fields";
import shortText from "../assets/icons/short-text-icon.png";
import numberIcon from "../assets/icons/number-icon.png";
import multipleChoice from "../assets/icons/multiple-choice-icon.png";
import singleChoice from "../assets/icons/single-choice-icon.png";

const inputs = [
  {
    id: 1,
    type: "text",
    label: "Short Text",
    img: shortText,
    imgAlt: "Short Text Icon",
  },
  {
    id: 2,
    type: "radio",
    label: "Single Choice",
    img: singleChoice,
    imgAlt: "Single Choice Icon",
  },
  {
    id: 3,
    type: "checkbox",
    label: "Multiple Choice",
    img: multipleChoice,
    imgAlt: "Multiple Choice Icon",
  },
  {
    id: 4,
    type: "number",
    label: "Number",
    img: numberIcon,
    imgAlt: "Number Icon",
  },
];

function Menu(props) {
  return (
    <div id={props.id} className={props.className}>
      {inputs.map((input) => (
        <Fields
          key={input.id}
          id={input.type}
          className="field-element"
          draggable="true"
        >
          <div className="field-icon">
            <img src={input.img} alt={input.imgAlt} />
          </div>
          <div className="field-text">{input.label}</div>
        </Fields>
      ))}
    </div>
  );
}

export default Menu;

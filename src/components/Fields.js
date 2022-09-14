import React from "react";
import { v4 as uuidv4 } from "uuid";

function Fields(props) {
  const dragStart = (e) => {
    const target = e.target;
    e.dataTransfer.setData("field_type", target.id);
    e.dataTransfer.setData("field_id", uuidv4());
  };
  const dragOver = (e) => {
    e.stopPropagation();
  };
  return (
    <div
      id={props.id}
      className={props.className}
      draggable={props.draggable}
      onDragStart={dragStart}
      onDragOver={dragOver}
    >
      {props.children}
    </div>
  );
}

export default Fields;

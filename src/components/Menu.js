import React from "react";

function Menu(props) {
  return (
    <div id={props.id} className={props.className}>
      {props.children}
    </div>
  );
}

export default Menu;

import React from "react";
import { useRef, useState } from "react";

function Output(props) {
  const [fieldItems, setFieldItems] = useState([]);
  const itemRef = useRef(null);
  const dragItem = useRef();
  const dragOverItem = useRef();

  // Handle Drop
  const drop = (e) => {
    e.preventDefault();
    const field_id = e.dataTransfer.getData("field_id");

    if (field_id) {
      setFieldItems([...fieldItems, field_id]);
    }
  };

  // add event for item can drop
  const dragOver = (e) => {
    e.preventDefault();
  };

  // Handle Sorting
  const handleSort = () => {
    // Duplicate Items
    let _fieldItems = [...fieldItems];

    // Remove and Save Dragged Item
    const draggedItemContent = _fieldItems.splice(dragItem.current, 1)[0];

    // Switch Position
    _fieldItems.splice(dragOverItem.current, 0, draggedItemContent);

    // Reset Position
    dragItem.current = null;
    dragOverItem.current = null;

    // Update The Form
    setFieldItems(_fieldItems);
  };

  // Handle Delete
  const deleteQuestion = (index) => {
    // Duplicate Items
    let _fieldItems = [...fieldItems];

    // Remove and Save Dragged Item
    _fieldItems.splice(index, 1);

    // Update The Form
    setFieldItems(_fieldItems);
  };

  return (
    <div
      id={props.id}
      onDrop={drop}
      onDragOver={dragOver}
      className={props.className}
    >
      {fieldItems.length ? (
        fieldItems.map((item, index) => {
          if (item === "text") {
            return (
              <div
                key={index}
                id={item}
                className="field form-field"
                draggable="true"
                onDragStart={(e) => (dragItem.current = index)}
                ref={itemRef}
                onDragEnter={(e) => (dragOverItem.current = index)}
                onDragEnd={handleSort}
                onDragOver={dragOver}
              >
                <p>What is your name?</p>
                <input
                  className="form-control"
                  type="text"
                  defaultValue=""
                  placeholder="This is sample text"
                />
                <button
                  type="button"
                  onClick={() => {
                    deleteQuestion(index);
                  }}
                  className="btn-delete"
                ></button>
              </div>
            );
          }
          if (item === "radio") {
            return (
              <div
                key={index}
                id={item}
                className="field form-field"
                draggable="true"
                onDragStart={(e) => (dragItem.current = index)}
                ref={itemRef}
                onDragEnter={(e) => (dragOverItem.current = index)}
                onDragEnd={handleSort}
                onDragOver={dragOver}
              >
                <p>What is your gender?</p>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="age"
                    value="male"
                  />
                  <label className="form-check-label">Male</label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="age"
                    value="female"
                  />
                  <label className="form-check-label">Female</label>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    deleteQuestion(index);
                  }}
                  className="btn-delete"
                ></button>
              </div>
            );
          }
          if (item === "checkbox") {
            return (
              <div
                key={index}
                id={item}
                className="field form-field"
                draggable="true"
                onDragStart={(e) => (dragItem.current = index)}
                ref={itemRef}
                onDragEnter={(e) => (dragOverItem.current = index)}
                onDragEnd={handleSort}
                onDragOver={dragOver}
              >
                <p>What is your favriote color?</p>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="color"
                    value="red"
                  />
                  <label className="form-check-label">Red</label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="color"
                    value="green"
                  />
                  <label className="form-check-label">Green</label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="color"
                    value="blue"
                  />
                  <label className="form-check-label">Blue</label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="color"
                    value="black"
                  />
                  <label className="form-check-label">Black</label>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    deleteQuestion(index);
                  }}
                  className="btn-delete"
                ></button>
              </div>
            );
          }
          if (item === "number") {
            return (
              <div
                key={index}
                id={item}
                className="field form-field"
                draggable="true"
                onDragStart={(e) => (dragItem.current = index)}
                ref={itemRef}
                onDragEnter={(e) => (dragOverItem.current = index)}
                onDragEnd={handleSort}
                onDragOver={dragOver}
              >
                <p>What is your phone number?</p>
                <input
                  className="form-control"
                  type="number"
                  defaultValue=""
                  placeholder="Input Number"
                />
                <button
                  type="button"
                  onClick={() => {
                    deleteQuestion(index);
                  }}
                  className="btn-delete"
                ></button>
              </div>
            );
          }
        })
      ) : (
        <h2 className="text-center">Drop your questions here.</h2>
      )}
    </div>
  );
}

export default Output;

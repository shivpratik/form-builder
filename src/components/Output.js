import React from "react";
import { useRef, useState } from "react";

function Output(props) {
  const [fieldItems, setFieldItems] = useState([]);
  const initialValues = {};
  const [formValues, setFormValues] = useState(initialValues);
  // const itemRef = useRef(null);
  const dragItem = useRef();
  const dragOverItem = useRef();

  // Handle Drop
  const drop = (e) => {
    e.preventDefault();
    const field_type = e.dataTransfer.getData("field_type");
    const field_id = e.dataTransfer.getData("field_id");
    if (field_id) {
      setFieldItems([...fieldItems, { id: field_id, type: field_type }]);
      setFormValues({ ...formValues, [field_id]: "" });
    }
    console.log(formValues);
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

  // Handle Change
  const handleChange = (e) => {
    // const { name, value } = e.target;
    console.log(e);
    // setFormValues({ ...formValues, [name]: value });
  };

  // Add Options
  const addOptions = (e, id) => {
    // const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [id]: [...formValues[id], { name: "age", label: "New Option" }],
    });
    console.log(formValues);
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
          if (item.type === "text") {
            return (
              <div
                key={index}
                id={item.id}
                data-type={item.type}
                className="field form-field"
                draggable="true"
                onDragStart={(e) => (dragItem.current = index)}
                // ref={itemRef}
                onDragEnter={(e) => (dragOverItem.current = index)}
                onDragEnd={handleSort}
                onDragOver={dragOver}
              >
                <div
                  className="editable"
                  contentEditable
                  suppressContentEditableWarning
                  onBlur={(e) => handleChange(item.id)}
                  onKeyPress={(e) => {
                    if (e.key === "13" || e.key === "Enter") {
                      e.preventDefault();
                      e.target.blur();
                    }
                  }}
                >
                  What is your name?
                </div>
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
          if (item.type === "radio") {
            return (
              <div
                key={index}
                id={item.id}
                data-type={item.type}
                className="field form-field"
                draggable="true"
                onDragStart={(e) => (dragItem.current = index)}
                // ref={itemRef}
                onDragEnter={(e) => (dragOverItem.current = index)}
                onDragEnd={handleSort}
                onDragOver={dragOver}
              >
                <div
                  className="editable"
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
                  What is your gender?
                </div>
                {console.log(formValues[item.id])}
                {formValues[item.id] &&
                  formValues[item.id].map((options) => {
                    return (
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="age"
                          value="male"
                        />
                        <label className="form-check-label">
                          {options.label}
                        </label>
                      </div>
                    );
                  })}
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
                  onClick={(e) => {
                    addOptions(e, item.id);
                  }}
                >
                  Add Options
                </button>
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
          if (item.type === "checkbox") {
            return (
              <div
                key={index}
                id={item.id}
                data-type={item.type}
                className="field form-field"
                draggable="true"
                onDragStart={(e) => (dragItem.current = index)}
                // ref={itemRef}
                onDragEnter={(e) => (dragOverItem.current = index)}
                onDragEnd={handleSort}
                onDragOver={dragOver}
              >
                <div
                  className="editable"
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
                  What is your favourite color?
                </div>
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
          if (item.type === "number") {
            return (
              <div
                key={index}
                id={item.id}
                data-type={item.type}
                className="field form-field"
                draggable="true"
                onDragStart={(e) => (dragItem.current = index)}
                // ref={itemRef}
                onDragEnter={(e) => (dragOverItem.current = index)}
                onDragEnd={handleSort}
                onDragOver={dragOver}
              >
                <div
                  className="editable"
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
                  What is your phone number?
                </div>
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
          return null;
        })
      ) : (
        <h2 className="text-center">Drop your questions here.</h2>
      )}
    </div>
  );
}

export default Output;

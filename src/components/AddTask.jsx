import React, { useState } from "react";

const AddTask = ({ updateData }) => {
  const [value, setValue] = useState("");
  const addToList = () => {
    //Here value travels from parent to child.
    updateData(value);
    setValue("");
  };

  return (
    <div className="addTaskContainer">
      <h2 className="heading">AddTask</h2>

      <div>
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="input-box"
          placeholder="Type here"
        ></input>
        <button onClick={addToList} className="add-btn">
          Add
        </button>
      </div>
    </div>
  );
};

export default AddTask;

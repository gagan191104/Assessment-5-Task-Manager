import React, { useState } from "react";

function TaskInput(props) {
  const [inputValue, setInputValue] = useState("");

  const handleAdd = () => {
    if (inputValue.trim() !== "") {
      props.addTask(inputValue);
      setInputValue("");
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleAdd();
    }
  };

  return (
    <div className="task-input">
      <input
        type="text"
        className="input-field"
        placeholder="Enter a new task..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <button className="add-btn" onClick={handleAdd}>
        Add Task
      </button>
    </div>
  );
}

export default TaskInput;

import React from "react";

function TaskItem(props) {
  return (
    <div className={props.task.completed ? "task-item completed" : "task-item"}>
      <input
        type="checkbox"
        className="task-checkbox"
        checked={props.task.completed}
        onChange={() => props.toggleTask(props.task.id)}
      />

      <span className="task-text">{props.task.text}</span>

      <button
        className="delete-btn"
        onClick={() => props.deleteTask(props.task.id)}
      >
        Delete
      </button>
    </div>
  );
}

export default TaskItem;

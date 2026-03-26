import React from "react";
import TaskItem from "./TaskItem";

function TaskList(props) {
  return (
    <div className="task-list">
      {props.tasks.length === 0 ? (
        <p className="no-tasks">No tasks available</p>
      ) : (
        props.tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            deleteTask={props.deleteTask}
            toggleTask={props.toggleTask}
          />
        ))
      )}
    </div>
  );
}

export default TaskList;

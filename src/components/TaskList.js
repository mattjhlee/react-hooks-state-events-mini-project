import React from "react";
import Task from "./Task";

function TaskList({ tasks, onDelete }) {
  const list = tasks.map((task, index) => {
    return <Task key={index} text={task.text} category={task.category} onDelete={onDelete} />
  })
  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {list}
    </div>
  );
}

export default TaskList;

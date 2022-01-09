import React from "react";

import "./Task.css";

import X from "../Assets/bx-x.svg";

const Task = ({ task, handleTaskClick, handleDeleteTask }) => {
  return (
    <div
      className="task-container"
      style={task.completed ? { borderLeft: "6px solid chartreuse" } : {}}
    >
      <div className="task-title" onClick={() => handleTaskClick(task.id)}>
        {task.title}
      </div>
      <img
        onClick={() => handleDeleteTask(task.id)}
        className="Xbutton"
        src={X}
        alt=""
        color="#7FFF00"
      />
    </div>
    // <div className='task-container'>
    //     {task.title}
    // </div>
  );
};

export default Task;

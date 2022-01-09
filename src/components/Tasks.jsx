import React from "react";

import Task from "./Task";

const Tasks = ({ tasks, handleTaskClick, handleDeleteTask }) => {
  return (
    <>
      {tasks?.map(
        (task) =>
          !!task.title && (
            <Task
              task={task}
              handleTaskClick={handleTaskClick}
              handleDeleteTask={handleDeleteTask}
              key={task.id}
            />
          )
      )}
    </>
  );
};

export default Tasks;

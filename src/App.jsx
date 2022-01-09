import React, { useEffect, useState } from "react";

import "./App.css";
import AddTask from "./components/AddTask";

import Tasks from "./components/Tasks";

const App = () => {
  const [tasks, setTasks] = useState();

  useEffect(() => {
    (async () => {
      const Tasks = await localStorage.getItem("MyTasks");
      !!Tasks && setTasks(JSON.parse(Tasks));
    })();
  }, []);

  useEffect(() => {
    (async () => {
      localStorage.clear();
      await localStorage.setItem("MyTasks", JSON.stringify(tasks));
    })();
    console.log(tasks);
  }, [tasks]);

  const handleTaskClick = (taskId) => {
    const newTaks = tasks.map((task) => {
      if (task.id === taskId) return { ...task, completed: !task.completed };
      return task;
    });
    setTasks(newTaks);
  };

  const handleDeleteTask = (taskId) => {
    const newTasks = tasks.filter((task) => {
      return task.id !== taskId;
    });
    setTasks(newTasks);
  };

  const handleTaskAddition = (taskTitle) => {
    if (!!taskTitle) {
      if (!!tasks) {
        const newTasks = [
          ...tasks,
          {
            id: Math.random(10),
            title: taskTitle,
            completed: false,
          },
        ];
        setTasks(newTasks);
      } else {
        const newTasks = [
          {
            id: Math.random(10),
            title: taskTitle,
            completed: false,
          },
        ];
        setTasks(newTasks);
      }
    }
  };

  return (
    <>
      <div className="container">
        <AddTask handleTaskAddition={handleTaskAddition} />
        <Tasks
          tasks={tasks}
          handleTaskClick={handleTaskClick}
          handleDeleteTask={handleDeleteTask}
        />
      </div>
    </>
  );
};
export default App;

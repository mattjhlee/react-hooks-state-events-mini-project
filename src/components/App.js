import React from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { useState } from "react";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [category, setCategory] = useState(("All"))
  const [tasks, setTasks] = useState(TASKS)

  function handleDelete(taskTextToDelete){
    setTasks(tasks.filter(task => (task.text !== taskTextToDelete))) 
  }

  const visibleTasks = tasks.filter(task => {
    return (category === "All" || task.category === category)
})

  function handleSubmit(newTask){
    setTasks([...tasks, newTask])
    console.log(newTask)
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} 
      selectedCategory={category} 
      onSelectCategory={setCategory} />
      <NewTaskForm categories={CATEGORIES.filter((category) => category !== "All")} 
      onTaskFormSubmit={handleSubmit} />
      <TaskList tasks={visibleTasks} onDelete={handleDelete}/>
    </div>
  );
}

export default App;

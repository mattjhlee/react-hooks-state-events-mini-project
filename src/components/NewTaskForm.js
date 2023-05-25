import React from "react";
import { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [text, setText] = useState("")
  const [category, setCategory] = useState("Code") 

  function handleSubmit(e) {
    e.preventDefault();
    onTaskFormSubmit({ text, category })
    setText("")
    setCategory("Code")
  }

  const options = categories.map(category => {
    return <option key={category}>{category}</option>
  })

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" value={text} onChange={(e) => setText(e.target.value)}/>
      </label>
      <label>
        Category
        <select name="category" value={category} onChange={(e) => setCategory(e.target.value)}>
          {/* render <option> elements for each category here */}
          {options}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;

import React from "react";

function CategoryFilter({ categories, selectedCategory, onSelectCategory }) {

  const buttons = categories.map((category) => {
    const buttonClass = category === selectedCategory ? "selected" : null;
    return <button key={category} className={buttonClass} onClick={() => onSelectCategory(category)}>{category}</button>
  })

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {buttons}
    </div>
  );
}

export default CategoryFilter;

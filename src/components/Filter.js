import React from "react";


function Filter ({onCategoryChange}) {
  return (

    <div className="categories">
      <h5>Category filters</h5>
      <select name="filter" onChange={onCategoryChange}>
        <option value="All">Filter by category</option>
        <option value="yesGreased">Yes Greased</option>
        <option value="noGreased">No Greased</option>
      </select>
    </div>
  )
}

export default Filter
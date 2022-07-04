import React from "react";


function Sort ({sortTheHogs}) {
  return (

    <div>
      <h5>Sort</h5>
      <select name="sort" onChange={sortTheHogs}>
        <option value="default">No Sort Applied</option>
        <option value="greased">Greased</option>
        <option value="weight">Weight</option>
      </select>
    </div>
  )
}

export default Sort
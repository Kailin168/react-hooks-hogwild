import React from 'react';

function NewHogForm({ newHogFromForm }) {
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      newHogFromForm({
        name: e.target.name.value,
        specialty: e.target.specialty.value,
        greased: e.target.greased.value.toLowerCase() === 'yes' ? true : false,
        'highest medal achieved': e.target['highest medal achieved'].value,
        image: e.target.image.value,
      });
      e.target.reset();
    }}
    >
      <label>
        Name:
        <input type="text" name="name" placeholder="name" />
        <input type="text" name="specialty" placeholder="specialty" />
        <input type="text" name="greased" placeholder="greased (yes/no)" />
        <input type="text" name="highest medal achieved" placeholder="highest medal achieved" />
        <input type="text" name="image" placeholder="image" />
      </label>
      <input type="submit" value="Submit" />
    </form>

  );
}
export default NewHogForm;

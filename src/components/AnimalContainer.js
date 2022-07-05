import React, { useState } from 'react';

function AnimalContainer({ filterHogContainer, handleDisplayBarHog }) {
  const [animalHover, setAnimalHover] = useState('')


  const getDetailAnimal = (animal) => {
    return (
      <div className="header">
        {animal.name}
        <br />
        {animal.specialty}
        <br />
        {`Greased: ${animal.greased ? 'Yes' : 'No'}`}
        <br />
        {animal["highest medal achieved"]}
        <br />
        {animal.weight}
        <br />
      </div>
    )
  }
  const getAnimal = (animal) => {
    return (
      <>
        <img className="right floated ui image" src={animal.image} alt={animal.name} />
        <div className="header">
          {animal.name}
        </div>
      </>
    );
  }

  return (
    <div className="ui cards">
      {filterHogContainer.map((animal) => (
        <div key={animal.name}
          className="card"
          onMouseOver={() => {
            setAnimalHover(animal.name)
          }}
          onMouseLeave={() => {
            setAnimalHover('')
          }}
          onClick={(event) => { handleDisplayBarHog(animal); }}>
          <div className="content">
            {animalHover === animal.name ? getDetailAnimal(animal) : getAnimal(animal)}
          </div>
        </div>
      ))}

    </div>
  );
}

export default AnimalContainer;

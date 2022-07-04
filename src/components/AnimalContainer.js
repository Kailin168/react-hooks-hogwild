import React from 'react';

function AnimalContainer({ filterHogContainer, handleDisplayBarHog }) {
  return (
    <div className="ui cards">
      {filterHogContainer.map((animal) => (
        <div key={animal.name} className="card" onClick={(event) => { handleDisplayBarHog(animal); }}>
          <div className="content">
            <img className="right floated ui image" src={animal.image} alt={animal.name} />
            <div className="header">
              {animal.name}
            </div>
          </div>
        </div>
      ))}

    </div>
  );
}

export default AnimalContainer;

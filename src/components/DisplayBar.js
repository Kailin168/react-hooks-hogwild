import React from "react";


const DisplayBar = ({ hogDisplayBar, handleRemove }) => {
  return (
    <div className="ui cards">
      {hogDisplayBar.map((singleHog) => {
        return (
          <div key={singleHog.name} className="card">
            <div className="content">
              <img className="right floated ui image" src={singleHog.image} alt={singleHog.name} />
              <div className="header">
                {singleHog.name}
                <br />
                {singleHog.specialty}
                <br />
                {`Greased: ${singleHog.greased ? 'Yes' : 'No'}`}
                <br />
                {singleHog["highest medal achieved"]}
                <br />
                {singleHog.weight}
                <br />
                <button onClick={()=>{handleRemove(singleHog)}}>Remove</button>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  );
};

export default DisplayBar;

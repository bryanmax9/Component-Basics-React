import React from "react";

function Concept(props) {
  return props.lista.map((item) => {
    return (
      <li className="concept">
        <img src={item.image} alt={item.title} />
        <h2>{item.title}</h2>
        <p>{item.description}</p>
      </li>
    );
  });
}

export default Concept;

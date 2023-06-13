import React from "react";

export const Product = ({ arr, deleteList }) => {
  return (
    <div>
      {arr.map((elem, i) => (
        <div key={i}>
          <h2>Name:{elem.name}</h2>
          <p>Decription:{elem.description}</p>
          <p>Price:{elem.price}$</p>
          <img src={elem.url} alt="" />
          <button onClick={() => deleteList(i)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

import React from "react";

export const Input = ({ productElements, handleChange, handleClick }) => {
  return (
    <div>
      <p>Product name</p>
      <input
        type="text"
        pattern="[A-Za-zА-Яа-яЁё]"
        name="name"
        value={productElements.name}
        placeholder="Product name"
        onChange={(event) => handleChange("name", event)}
      />

      <p>Product decription</p>
      <input
        type="text"
        pattern="[A-Za-zА-Яа-яЁё]"
        name="description"
        placeholder="Product decription"
        value={productElements.description}
        onChange={(event) => handleChange("description", event)}
      />
      <p>Product price</p>
      <input
        type="number"
        min={0}
        max={100}
        name="price"
        value={productElements.price}
        placeholder="Price"
        onChange={(event) => handleChange("price", event)}
      />
      <p>Еnter the URL address</p>
      <input
        type="text"
        name="url"
        value={productElements.url}
        placeholder="URL"
        onChange={(event) => handleChange("url", event)}
      />
      <br />
      <br />
      <button onClick={handleClick}>Add Product</button>
    </div>
  );
};

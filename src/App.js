import { Input } from "./Input";
import { Product } from "./Product";
import { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  const [productElements, setProductElements] = useState({
    name: "",
    description: "",
    price: "",
    url: "",
  });
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
  const handleChange = (prop, event) => {
    setProductElements({
      ...productElements,
      ...{ [prop]: event.target.value },
    });
  };
  const handleClick = () => {
    setCart([...cart, productElements]);
    setProductElements({
      name: "",
      description: "",
      price: "",
      url: "",
    });
  };
  const deleteList = (index) => {
    const updatedCart = cart.filter((item, k) => k !== index);
    setCart(updatedCart);
  };

  return (
    <div className="App">
      <header>
        <h1>Products List</h1>
        <Input
          productElements={productElements}
          handleChange={handleChange}
          handleClick={handleClick}
        />
      </header>
      <main className="cart-list">
        <div className="cart-item">
          <Product arr={cart} deleteList={deleteList} />
        </div>
      </main>
    </div>
  );
};

export default App;

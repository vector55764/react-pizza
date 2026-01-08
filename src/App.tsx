import React, { useEffect, useState } from "react";

import "./scss/app.scss";
import { Header } from "./components/Header";
import { Categories } from "./components/Categories";
import { Sort } from "./components/Sort";
import { PizzaBlock, type Pizza } from "./components/PizzaBlock";

// import items from "./assets/pizza.json";

function App() {
  const [items, setItems] = useState<Pizza[]>([]);

  useEffect(() => {
    fetch("https://69601fefe7aa517cb79562ca.mockapi.io/items")
      .then((res) => res.json())
      .then((arr) => setItems(arr));
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {items.map((item) => (
              <PizzaBlock key={item.id} {...item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

import React, { useState } from "react";
import { Categories } from "./assets/components/Categories";
import { Menu } from "./assets/components/Menu";
import products from "./assets/data/products";
const allCategories = [
  "all",
  ...new Set(products.map((item) => item.category)),
];

export const App = () => {
  const [items, setItems] = useState(products);
  const [categories, setCategories] = useState(allCategories);

  const filtringItems = (category) => {
    if (category === "all") {
      setItems(products);
      return;
    }
    const newItems = products.filter((pr) => pr.category === category);
    setItems(newItems);
  };
  return (
    <section className="section">
      <div className="title-menu">
        <h1>Our Menu</h1>
      </div>
      <Categories categories={categories} filtringItems={filtringItems} />
      <Menu items={items} />
    </section>
  );
};

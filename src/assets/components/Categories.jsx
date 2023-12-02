import React from "react";

export const Categories = ({ categories, filtringItems }) => {
  return (
    <section className="section-btns">
      {categories.map((category, index) => {
        return (
          <button key={index} onClick={() => filtringItems(category)}>
            {category}
          </button>
        );
      })}
    </section>
  );
};

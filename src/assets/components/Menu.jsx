import React from "react";

export const Menu = ({ items }) => {
  return (
    <section className="menu-section">
      {items.map((item) => {
        const { id, title, price, img, desc } = item;
        return (
          <div className="box" key={id}>
            <div className="image">
              <img src={img} />
            </div>
            <div className="header-text">
              <h3>{title}</h3>
              <p>{price}</p>
            </div>
            <span>{desc}</span>
          </div>
        );
      })}
    </section>
  );
};

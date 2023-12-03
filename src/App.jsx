import React, { useState } from "react";
import text from "./lorem";

export const App = () => {
  // state
  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);
  //handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    if (amount <= 0) {
      amount = 0;
    }
    if (amount > 8) {
      amount = 8;
    }
    setData(text.slice(0, amount));
  };

  return (
    <section className="section">
      <h2>tired of boring lorem ipsum?</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="amount">paragraphs:</label>
        <input
          type="number"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button>Generate</button>
      </form>
      <div className="conatiner-paraghraphe">
        {data.map((d, i) => {
          return (
            <p className="paraghraphe" key={i}>
              {d}
            </p>
          );
        })}
      </div>
    </section>
  );
};

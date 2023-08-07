import React, { useState } from "react";

function Item({ name, category }) {
  const [choosed, setChoose] = useState(false)

  const addToCard = ()=>{
    setChoose(!choosed)

  }

  return (
    <li className={choosed ? "in-cart": ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={addToCard}>{choosed ? "Remove From Cart": "Add to Cart"}</button>
    </li>
  );
}

export default Item;

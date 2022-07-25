import React from "react";
import "./styles.scss";

function CurrencyCard(props) {
  return (
    <div className="grid-element">
      <img className="currency-image" src={props.card.coverImage}></img>
      <h3 className="title">{props.card.name}</h3>
      <p className="price">{props.card.price}</p>
    </div>
  );
}

export default CurrencyCard;

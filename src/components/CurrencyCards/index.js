import React from "react";
import "./styles.scss";
import CurrencyData from "./CurrencyData";
import CurrencyCard from "./CurrencyCard";

function CurrencyCards(props) {
  const cards = CurrencyData.map((card) => {
    return <CurrencyCard key={card.id} card={card} />;
  });
  return <div className="grid">{cards}</div>;
}

export default CurrencyCards;

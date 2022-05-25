import React from "react";
import "./Played.css";
import cards from "../../../constants/cards";

const Played = (props) => {
  return (
    <div className="game">
      {props.boardDeck.map((card) =>
        card.cardName.includes("ace") ? (
          <div className="card">
            <img
              style={{ display: card.cardVisibility }}
              src={require(`../../../assets/deck/${card.cardName}`)}
              alt={card.cardName}
            />
          </div>
        ) : (
          <div className="card overlap">
            <img
              style={{ display: card.cardVisibility }}
              src={require(`../../../assets/deck/${card.cardName}`)}
              alt={card.cardName}
            />
          </div>
        )
      )}
    </div>
  );
};

export default Played;

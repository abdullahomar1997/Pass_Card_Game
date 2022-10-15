import React from "react";
import User from "../user/User";
// import UserDeck from "../userDeck/UserDeck";
import "./Played.css";

const Played = ({ boardDeck, players }) => {
  const countNumberOfCards = () => {
    let num = 0;

    // for (let i = 0; i < boardDeck.length; ++i) {
    //   if (boardDeck[i].player === id) {
    //     num += 1;
    //   }
    // }
    return num;
  };

  const countNumberOfPasses = () => {};

  return (
    <div className="mainBlock">
      {boardDeck.map((card) => (
        <div className="card overlap">
          <img
            style={{ visibility: card.cardVisibility }}
            src={require(`../../../assets/deck/${card.cardName}`)}
            alt={card.cardName}
          />
        </div>
      ))}
    </div>
  );
};

export default Played;

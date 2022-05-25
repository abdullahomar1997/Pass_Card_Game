import React from "react";
import updateDeck from "../../../utils/updateDeck";
import "./UserDeck.css";

let updatedDeck;

const UserDeck = ({ boardDeck, setBoardDeck }) => {
  const OnCardPlayedHandler = (card) => {
    if (card.isPlayable) {
      updatedDeck = updateDeck(card, boardDeck);

      CpuPlayAutomatically();
      setBoardDeck(updatedDeck);
    } else {
      alert("Card is not Playable");
    }
  };

  const OnPassPlayedHandler = () => {
    CpuPlayAutomatically();
    setBoardDeck(updatedDeck);
  };

  const CpuPlayAutomatically = () => {
    for (let i = 0; i < updatedDeck.length; ++i) {
      const card = updatedDeck[i];
      if (
        card.isPlayable &&
        card.player === "1" &&
        card.cardVisibility == "none"
      ) {
        console.log("found card", card);
        updatedDeck = updateDeck(card, updatedDeck);

        break;
      }
    }
  };

  console.log(boardDeck);

  return (
    <div className="your__cards">
      {boardDeck
        .filter((c) => c.player === "0" && c.cardVisibility === "none")
        .map((card) => (
          <div
            className="card leftlap"
            onClick={() => OnCardPlayedHandler(card)}
          >
            <img
              src={require(`../../../assets/deck/${card.cardName}`)}
              alt="me"
            />
          </div>
        ))}

      <div
        className="card card_bottom_right"
        onClick={() => OnPassPlayedHandler()}
      >
        <img
          src={require(`../../../assets/deck/queen_of_spades.png`)}
          alt="pass"
        />
      </div>
    </div>
  );
};

export default UserDeck;

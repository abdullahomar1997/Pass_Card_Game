import React, { useEffect, useState } from "react";
import "./Board.css";
import MyDeck from "./userDeck/UserDeck";
import Played from "./played/Played";
import cards from "../../constants/cards";
import assignCards from "../../utils/assignCards";

const Board = () => {
  const [boardDeck, setBoardDeck] = useState(assignCards(2, cards()));

  const updateBoardDeck = (boardDeck) => {
    setBoardDeck(boardDeck);
  };

  return (
    <div className="container board__container">
      <Played boardDeck={boardDeck} />
      <MyDeck boardDeck={boardDeck} setBoardDeck={setBoardDeck} />
    </div>
  );
};

export default Board;

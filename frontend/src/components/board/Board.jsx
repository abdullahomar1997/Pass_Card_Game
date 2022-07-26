import React, { useEffect, useState } from "react";
import "./Board.css";
import MyDeck from "./userDeck/UserDeck";
import Played from "./played/Played";
import cards from "../../constants/cards";
import assignCards from "../../utils/assignCards";
import createPlayers from "../../utils/createPlayers";

const Board = () => {
  let numberOfPlayers = 4;

  const [players, setPlayers] = useState(createPlayers(numberOfPlayers));

  const [boardDeck, setBoardDeck] = useState(assignCards(players, cards()));

  useEffect(() => {
    for (let i = 0; i < players.length; ++i) {
      players[i].numCards = boardDeck.filter(
        (c) => c.player === i.toString()
      ).length;
    }
  }, []);

  return (
    <div className="container board__container">
      <Played players={players} boardDeck={boardDeck} />
      <MyDeck
        boardDeck={boardDeck}
        setBoardDeck={setBoardDeck}
        players={players}
        setPlayers={setPlayers}
      />
    </div>
  );
};

export default Board;

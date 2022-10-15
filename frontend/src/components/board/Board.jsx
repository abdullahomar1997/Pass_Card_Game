import React, { useEffect, useState } from "react";
import "./Board.css";
import MyDeck from "./userDeck/UserDeck";
import Played from "./played/Played";
import cards from "../../constants/cards";
import assignCards from "../../utils/assignCards";
import createPlayers from "../../utils/createPlayers";
import CpuDeck from "./userDeck/CpuDeck";

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
      <div className="player1">
        <MyDeck
          boardDeck={boardDeck}
          setBoardDeck={setBoardDeck}
          players={players}
          setPlayers={setPlayers}
          classN={"player_1"}
        />
      </div>

      {/* <div className="player2">
        <CpuDeck
          boardDeck={boardDeck}
          setBoardDeck={setBoardDeck}
          players={players}
          setPlayers={setPlayers}
          classN={"player_2"}
        />
      </div> */}

      {/* <div className="player3">
        <CpuDeck
          boardDeck={boardDeck}
          setBoardDeck={setBoardDeck}
          players={players}
          setPlayers={setPlayers}
          classN={"player_3"}
        />
      </div>

      <div className="player4">
        <CpuDeck
          boardDeck={boardDeck}
          setBoardDeck={setBoardDeck}
          players={players}
          setPlayers={setPlayers}
          classN={"player_4"}
        />
      </div> */}

      {/* <div className="played">
        <Played players={players} boardDeck={boardDeck} />
      </div> */}
    </div>
  );
};

export default Board;

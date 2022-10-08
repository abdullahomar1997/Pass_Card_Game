import React from "react";
import updateDeck from "../../../utils/updateDeck";
import "./UserDeck.css";

let updatedDeck;

const CpuDeck = ({ boardDeck, setBoardDeck, players, setPlayers,classN}) => {
  const OnCardPlayedHandler = (card) => {
    console.log(players);
    if (card.isPlayable) {
      updatedDeck = updateDeck(card, boardDeck);

      players[0].numCards -= 1;
      setPlayers(players);

      CpuPlayAutomatically();
      setBoardDeck(updatedDeck);
    } else {
      alert("Card is not Playable");
    }
  };

  const OnPassPlayedHandler = () => {
    players[0].numPasses += 1;
    setPlayers(players);
    CpuPlayAutomatically();
    setBoardDeck(updatedDeck);
  };

  const CpuPlayAutomatically = () => {
    for (let j = 1; j < players.length; ++j) {
      let found = false;

      for (let i = 0; i < updatedDeck.length; ++i) {
        const card = updatedDeck[i];
        if (
          card.isPlayable &&
          card.player === players[j].id &&
          card.cardVisibility === "hidden"
        ) {
          found = true;
          players[j].numCards -= 1;
          setPlayers(players);

          updatedDeck = updateDeck(card, updatedDeck);

          break;
        }
      }
      if (!found) {
        players[j].numPasses += 1;
        setPlayers(players);
      }
    }
  };

  return (
    <div className={classN}>
      {boardDeck
        .filter((c) => c.player === "0")
        .map((card) => (
          <div
            className="cpuCard"
            onClick={() => OnCardPlayedHandler(card)}
          >
            <img
              src={require(`../../../assets/deck/pass.png`)}
              alt="me"
            />
          </div>
        ))}

      <div
        className="cpuCard"
        onClick={() => OnPassPlayedHandler()}
      >
        <img src={require(`../../../assets/deck/pass.png`)} alt="pass" />
      </div>
    </div>
  );
};

export default CpuDeck;

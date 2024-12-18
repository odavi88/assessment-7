import React, { useState } from "react";
import PlayerRow from "./PlayerRow";
import PlayerForm from "./PlayerForm";

function PlayerList() {
  const [players, setPlayers] = useState([]);

  // Function to add a new player
  const addPlayer = (name, score) => {
    const newPlayer = { name, score: parseInt(score) };
    setPlayers([...players, newPlayer]);
  };

  // Function to clear the list
  const clearList = () => setPlayers([]);

  return (
    <>
      <button onClick={clearList}>Clear List</button>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {players.map((player, index) => (
            <PlayerRow key={index} player={player} />
          ))}
        </tbody>
      </table>
      <PlayerForm addPlayer={addPlayer} />
    </>
  );
}

export default PlayerList;

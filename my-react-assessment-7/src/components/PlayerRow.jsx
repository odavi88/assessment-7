import React from "react";

function PlayerRow({ player }) {
  const { name, score } = player;

  return (
    <tr>
      <td>{name}</td>
      <td>{score}</td>
    </tr>
  );
}

export default PlayerRow;

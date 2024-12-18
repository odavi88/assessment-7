import React, { useState } from "react";

function PlayerForm({ addPlayer }) {
  const [name, setName] = useState("");
  const [score, setScore] = useState("");

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && score) {
      addPlayer(name, score);
      setName(""); // Clear the input fields
      setScore("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div id="inputs">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          placeholder="Input name..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="score">Score</label>
        <input
          id="score"
          type="number"
          placeholder="Input score..."
          value={score}
          onChange={(e) => setScore(e.target.value)}
        />

        <button type="submit">Add Player</button>
      </div>
    </form>
  );
}

export default PlayerForm;

import React, { useState, useEffect } from "react";

function Champions() {
  const [champions, setChampions] = useState([
    { championId: "loading", championLevel: "loading" }
  ]);
  const [error, setError] = React.useState(null);

  async function getChampions() {
    try {
      const championsResponse = await fetch("api/champions");
      const json = await championsResponse.json();
      setChampions(json);
    } catch {
      setError(error);
    }
  }

  useEffect(() => {
    getChampions();
  }, []);

  if (champions.length > 1) {
    return (
      <ul>
        {champions
          .slice(0, 10)
          .filter(Boolean)
          .map((champ, idx) => {
            return <li key={idx}>{champ.championLevel}</li>;
          })}
      </ul>
    );
  }
  return <p>Loading..</p>;
}

export default Champions;

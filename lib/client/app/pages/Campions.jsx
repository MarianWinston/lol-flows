import React, { useState, useEffect } from "react";
import "../styles/home.scss";

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
    console.log(champions);
  }

  useEffect(() => {
    getChampions();
  }, []);

  console.log(champions);

  if (champions.length > 1) {
    return (
      <ul>
        {champions
          .slice(0, 10)
          .filter(Boolean)
          .map((champ, idx) => {
            console.log(champ); 
            <li key={idx}>{champ}</li>; /* ===> BIG ISSUE HERE NO RENDERING LI(S)*/
          })}
      </ul>
    );
  }

  return <p>Loading..</p>;
}

export default Champions;

import React, { useState, useEffect } from "react";
import "../styles/home.scss";

function Champions() {
  const [champions, setChampions] = useState({ championsId: 'loading'})
  async function getChampions() {
    const champions = await fetch("/api/champions");
    const json = await champions.json();
    console.log(json)
    setChampions(json)
  }

  useEffect(() => {
    getChampions()
  }, [])
  

  return <div>{champions.championsId}</div>;
}

export default Champions;

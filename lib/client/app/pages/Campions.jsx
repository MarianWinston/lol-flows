import React, { useState, useEffect } from "react";
import "../styles/home.scss";

async function Champions() {
  const champions = await fetch("api/champions");
  const json = await champions.json();
  return <div>{json.championsId}</div>;
}

export default Champions;

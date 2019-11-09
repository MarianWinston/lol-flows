import React, { useState, useEffect } from "react";
import "../styles/style.scss";
import Champions from "../components/Champions";
import Layout from "../components/Layout";

function Home() {
  return (
    <Layout>
      <Champions />;
    </Layout>
  );
}

export default Home;

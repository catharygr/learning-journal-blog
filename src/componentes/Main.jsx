// import React from "react";
import Card from "./Card";
import data from "../data";
import { useState } from "react";

export default function Main() {
  const [numCards, setNumcards] = useState(6);
  const ordenar = [...data];
  const sliced = ordenar.sort((a, b) => b.date - a.date).slice(0, numCards);

  function handleNumCards() {
    setNumcards((oldNum) => oldNum + 3);
  }

  const mapeo = sliced.map((card) => {
    return (
      <>
        <Card
          key={card.id}
          title={card.title}
          description={card.description}
          date={card.date}
          imgUrl2={card.imgUrl2}
        />
      </>
    );
  });

  return (
    <>
      <main className="container-main">{mapeo}</main>
      <button className="btn" onClick={handleNumCards}>
        View More
      </button>
    </>
  );
}

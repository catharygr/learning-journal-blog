/* eslint-disable no-unused-vars */
// import React from "react";
import Card from "./Card";
import data from "../data";
import { useState } from "react";

export default function BlogMain() {
  const [numCards, setNumcards] = useState(3);
  const ordenar = [...data];
  const sliced = ordenar.sort((a, b) => b.date - a.date).slice(0, numCards);

  const mapeo = sliced.map((card) => {
    return (
      <>
        <Card
          key={card.id}
          title={card.title}
          description={card.description}
          date={card.date}
          imgUrl2={card.imgUrl2}
          id={card.id}
        />
      </>
    );
  });

  return (
    <>
      <main className="container-main">{mapeo}</main>
    </>
  );
}

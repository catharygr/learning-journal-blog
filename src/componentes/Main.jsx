import React from "react";
import Card from "./Card";
import { Link } from "react-router-dom";

export default function Main() {
  return (
    <>
      <main className="container-main">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </main>
      <Link to="/">
        <p className="view-more">View More</p>
      </Link>
    </>
  );
}

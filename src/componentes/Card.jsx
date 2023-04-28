/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

export default function Card({ title, date, description, imgUrl2, id }) {
  const fecha = new Date(date);
  return (
    <div className="card">
      <div className="img-aspect-ratio">
        <img src={imgUrl2} alt="Ordenador al lado de una planta" />
      </div>
      <p>{fecha.toLocaleDateString()}</p>
      <Link to={`blog/${id}`}>
        <h2>{title}</h2>
      </Link>
      <p>{description}</p>
    </div>
  );
}

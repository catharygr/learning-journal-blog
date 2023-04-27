/* eslint-disable react/prop-types */

export default function Card({ title, date, description, imgUrl2 }) {
  const fecha = new Date(date);
  return (
    <div className="card">
      <div className="img-aspect-ratio">
        <img src={imgUrl2} alt="Ordenador al lado de una planta" />
      </div>
      <p>{fecha.toLocaleDateString()}</p>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

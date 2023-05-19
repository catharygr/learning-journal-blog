import data from "../data";
import { Link } from "react-router-dom";

export default function Hero() {
  const ordenar = [...data];
  const sliced = ordenar.sort((a, b) => b.date - a.date).slice(0, 1);
  const fecha = new Date(sliced[0].date);

  return (
    <div className="hero-container">
      <p>{fecha.toLocaleDateString()}</p>
      <h2>{sliced[0].title}</h2>
      {/* <Link to="blog">
        <h2>{sliced[0].title}</h2>
      </Link> */}
      <p>{sliced[0].description}</p>
    </div>
  );
}

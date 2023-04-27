import data from "../data";
import { Link, useParams } from "react-router-dom";
import Card from "./Card";

export default function CardDetails() {
  const params = useParams();
  const blogs = data.find((blog) => blog.id === params.id);
  console.log(blogs);
  return (
    <>
      <Link to="/">
        <Card key={blogs.id} id={blogs.id} />
      </Link>
      <p>Hola</p>
      <div className="card">
        <div className="img-aspect-ratio">
          <img src={blogs.imgUrl2} alt="Ordenador al lado de una planta" />
        </div>
        <p>{blogs.fecha.toLocaleDateString()}</p>
        <h2>{blogs.title}</h2>
        <p>{blogs.description}</p>
      </div>
    </>
  );
}

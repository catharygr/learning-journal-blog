import data from "../data";
import { useParams } from "react-router-dom";

export default function BlogDetails() {
  const params = useParams();
  const blogs = data.find((blog) => blog.id === params.id);
  const fecha = new Date(blogs.date);

  return (
    <>
      <div className="card">
        <p>{fecha.toLocaleDateString()}</p>
        <h2>{blogs.title}</h2>
        <p>{blogs.description}</p>
        <div className="img-aspect-ratio">
          <img src={blogs.imgUrl2} alt="Ordenador al lado de una planta" />
        </div>
      </div>
    </>
  );
}

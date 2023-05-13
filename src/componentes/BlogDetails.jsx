import data from "../data";
import { useParams } from "react-router-dom";
import Hero from "./Hero";

export default function BlogDetails() {
  const params = useParams();
  const blogs = data.find((blog) => blog.id === params.id);
  const fecha = new Date(blogs.date);

  return (
    <div>
      <Hero
        title={blogs?.title}
        date={blogs?.fecha.toLocaleDateString}
        description={blogs?.description}
      />
      <div className="">
        <p>{fecha?.toLocaleDateString()}</p>
        <h2>{blogs?.title}</h2>
        <p>{blogs?.description}</p>
        <div className="img-aspect-ratio">
          <img src={blogs?.imgUrl2} alt={blogs?.title} />
        </div>
      </div>
    </div>
  );
}

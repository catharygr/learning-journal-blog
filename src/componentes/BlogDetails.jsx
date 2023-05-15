import data from "../data";
import { useParams } from "react-router-dom";

import BlogMain from "./BlogMain";

export default function BlogDetails() {
  const params = useParams();
  const blogs = data.find((blog) => blog.id === params.id);
  const fecha = new Date(blogs.date);

  return (
    <div>
      <div className="">
        <p>{fecha.toLocaleDateString()}</p>
        <h2>{blogs.title}</h2>
        <p>{blogs.description}</p>
        <div className="img-aspect-ratio">
          <img src={blogs.imgUrl2} alt={blogs.title} />
        </div>
        <p>{blogs.text}</p>
      </div>
      <BlogMain />
    </div>
  );
}

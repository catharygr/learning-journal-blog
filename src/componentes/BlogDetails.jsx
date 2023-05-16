import data from "../data";
import { useParams } from "react-router-dom";
import BlogMain from "./BlogMain";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

export default function BlogDetails() {
  const params = useParams();
  const blogs = data.find((blog) => blog.id === params.id);
  const fecha = new Date(blogs.date);

  q;
  const descriptionMD = blogs.description.replace(/\\n\\n/g, "\n\n");

  return (
    <div>
      <div className="container-blog">
        <p className="fecha-blog">{fecha.toLocaleDateString()}</p>
        <h2>{blogs.title}</h2>
        <ReactMarkdown>{descriptionMD}</ReactMarkdown>
        <p className="blog-description">{blogs.description}</p>
        <div className="img-blog">
          <img src={blogs.imgUrl2} alt={blogs.title} />
        </div>
        <p>{blogs.text}</p>
      </div>
      <BlogMain />
    </div>
  );
}

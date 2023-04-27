import { BrowserRouter, Routes, Route } from "react-router-dom";
import "/style.css";
import HomeLayout from "./componentes/HomeLayout";
import Home from "./componentes/Home";
import About from "./componentes/About";
import BlogLayout from "./componentes/BlogLayout";
import BlogDetails from "./componentes/BlogDetails";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeLayout />}>
            <Route index element={<Home />} />
            <Route path="blog" element={<BlogLayout />}>
              <Route path="blog/:id" element={<BlogDetails />} />
            </Route>
          </Route>
          <Route path="about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import "/style.css";
import HomeLayout from "./componentes/HomeLayout";
import Home from "./componentes/Home";
import About from "./componentes/About";

import BlogDetails from "./componentes/BlogDetails";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeLayout />}>
            <Route index element={<Home />} />
            <Route path="blog/:id" element={<BlogDetails />} />
            <Route path="about" element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

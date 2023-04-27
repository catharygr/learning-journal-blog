import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "/style.css";
import HomeLayout from "./pages/HomeLayout";
import Home from "./componentes/Home";
import About from "./componentes/About";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeLayout />}>
            <Route index element={<Home />} />
          </Route>
          <Route path="about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

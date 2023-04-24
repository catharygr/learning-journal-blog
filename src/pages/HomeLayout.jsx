import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../componentes/Header";
import Hero from "../componentes/Hero";
import Main from "../componentes/Main";
import Footer from "../componentes/Footer";

export default function HomeLayout() {
  return (
    <div className="home-layout">
      <Header />
      <Hero />
      <Main />
      <Outlet />
      <Footer />
    </div>
  );
}

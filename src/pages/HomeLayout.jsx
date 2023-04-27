import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../componentes/Header";
import Footer from "../componentes/Footer";

export default function HomeLayout() {
  return (
    <div className="home-layout">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

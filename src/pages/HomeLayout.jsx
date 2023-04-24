import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../componentes/Header";
import Hero from "../componentes/Hero";

export default function HomeLayout() {
  return (
    <div className="home-layout">
      <Header />
      <Hero />
      <Outlet />
    </div>
  );
}

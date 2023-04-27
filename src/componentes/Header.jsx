import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="container">
      <div className="header-container">
        <img
          className="img-logo"
          src="../../assets/image/logo.png"
          alt="Logo"
        />
        <h1 className="ff-title fs-700">My Learning Journal</h1>
      </div>
      <div className="nav-container">
        <NavLink to="/">Home</NavLink>
        <NavLink to="about">About me</NavLink>
      </div>
    </header>
  );
}

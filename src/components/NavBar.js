import React from "react";
import { NavLink } from "react-router-dom";

const linkStyle = {
  margin: "0 6px 6px"
}

function NavBar() {
  return (
    <div className="navbar">
      <NavLink to="/" exact style={linkStyle}>Home</NavLink>
      <NavLink to="/movies" exact style={linkStyle}>Movies</NavLink>
      <NavLink to="/directors" exact style={linkStyle}>Directors</NavLink>
      <NavLink to="/actors" exact style={linkStyle}>Actors</NavLink>
    </div>
  )
}

export default NavBar;

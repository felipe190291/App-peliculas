import React from "react";
import "../NavBar/NavBar.css";
import home from "../../imgs/home.png";
import favs from "../../imgs/favorites.png";
import movie from "../../imgs/movie.png";
import { NavLink } from "react-router-dom";
export function NavBar() {
  return (
    <div>
      <div className="inicio">
        <img src={movie} width="50" heigth="50" alt="no se " />
      </div>
      <div className="NavBar">
        <NavLink to="/">
          <img src={home} width="50" heigth="50" alt="no se " />
        </NavLink>
        <br />
        <NavLink exact to="/favs">
          <img src={favs} width="50" heigth="50" alt="no se " />
        </NavLink>
      </div>
    </div>
  );
}

export default NavBar;

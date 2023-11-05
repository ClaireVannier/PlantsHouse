import React from "react";

function NavBar() {
  return (
    <nav>
      <ul className="navbar_links">
        <li className="item">
          <a href="/">Accueil</a>
        </li>
        <li className="item">
          <a href="plants">Les plantes</a>
        </li>
        <li className="item">
          <a href="about">A propos de nous</a>
        </li>
      </ul>
      <button className="navbar_burger">
        <span className="burger_line"></span>
      </button>
    </nav>
  )
}

export default NavBar;
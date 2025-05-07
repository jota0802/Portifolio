import React from "react";
import { NavStyle } from "./NavStyle";
const Nav = () => {
  return (
    <NavStyle>
      <section className="nav-container">
        <div className="logo">
          <img src="" alt="" />
        </div>
        <div className="link-container">
          <div className="link">Sobre</div>
          <div className="link">Habilidades</div>
          <div className="link">Contato</div>
        </div>
      </section>
    </NavStyle>
  );
};

export default Nav;

import React from "react";
import "./Header.css";

const Header = props => (
  <header className="header">
    <h1>Clicky Penalty Game!</h1>
    <h2>
      Click on an goalkeeper to shoot,<br/> if you click twice on the same goalkeeper, <br/> Game Over!!
    </h2>
  </header>
);

export default Header;

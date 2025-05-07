import "./App.css";
import { useState } from "react";

//imges
import hamburgerPNG from "./resorces/hambugerMenu.png";

function App() {
  let flipflop = true;
  let hamburgerMenu = () => {
    let hamburger = document.getElementsByClassName("hamburgerMenu")[0];

    if (flipflop) {
      hamburger.style.rotate = "90deg";
      hamburger.style.transition = "0.5s";
      flipflop = false;
    } else if (flipflop == false) {
      hamburger.style.rotate = "0deg";
      hamburger.style.transition = "0.5s";
      flipflop = true;
    } else {
      alert("Error: flipflop ");
    }
  };

  return (
    <div className="app">
      <div className="navbar">
        <div className="navLeft">
          <div className="logo">Sigma Bar</div>
        </div>
        <div className="navRight">
          <div className="navItem">
            <p>Home</p>
          </div>
          <div className="navItem">
            <p>About</p>
          </div>
          <div className="navItem">
            <p>Contact</p>
          </div>
          <div className="hamburgerMenu" onClick={hamburgerMenu}>
            <img src={hamburgerPNG} alt="hamburger menu"></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

import "./App.css";
import { useState } from "react";

//imges
import hamburgerPNG from "./resorces/hambugerMenu.png";


/*TODO 
Ändra get elementByClassName


*/
function App() {
  let flipflop = true;
  let hamburgerMenu = () => {
    let hamburger = document.getElementsByClassName("hamburgerMenu")[0];
    let hamburgerList = document.getElementsByClassName("hamburgerList")[0];

    if (flipflop) {
      hamburger.style.rotate = "90deg";
      hamburger.style.transition = "0.5s";

      hamburgerList.style.display = "flex";
      hamburgerList.style.rotate = "0deg";


      flipflop = false;
    } else if (flipflop == false) {
      hamburger.style.rotate = "0deg";
      hamburger.style.transition = "0.5s";

      hamburgerList.style.display = "none";

      flipflop = true;
    } else {
      alert("Error: flipflop ");
    }
  };

  return (
    <div className="app">
      <div className="navbar">
        <div className="navLeft">
          <div className="logo">RoboYap</div>
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
          <div className="hamburgerList">
              <div className="hambItem">
                <p>Home</p>
              </div>
              <div className="hambItem">
                <p>About</p>
              </div>
              < div className="hambItem">
                <p>Contact</p>
              </div>
            </div>
        </div>
      </div>

      <div className="banner">
        <div>
          <p>Making your own AI chatbot</p>
        </div>
      </div>

    </div>
  );
}

export default App;

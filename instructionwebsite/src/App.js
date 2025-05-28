import "./App.css";
import { useState } from "react";
import { motion } from "motion/react";

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
            <div className="hambItem">
              <p>Contact</p>
            </div>
          </div>
        </div>
      </div>

      <div className="banner">
        <div className="introMegaTextCointainer">
          <div className="introMegaText">
            <div className="MT1">
              <p>Making your own</p>
            </div>
            <div className="MT2">
              <p>AI chatbot</p>
            </div>
          </div>
        </div>

        <div className="whereRU">
          <div>
            <p>Introduction</p>
          </div>
          <div>
            <p>Overview</p>
          </div>
          <div>
            <p>Getting Started</p>
          </div>
          <div>
            <p>Next Steps</p>
          </div>
        </div>

        <div className="introFunFact">
          <div className="introFunFactImg">
            <img alt="img here"></img>
          </div>
          <div className="introFunFactText">
            <p>text discrip</p>
          </div>
        </div>

        <div className="chatBotExample">
          <div className="chatBotBox">
            <p></p>
          </div>
        </div>
      </div>

      <div className="overview">
        <div className="overviewContent">
          <div className="overviewTextBox">
            <p>text here</p>
          </div>

          <div className="overviewRight">
            <div className="walk">
              <video alt="walkthough video"></video>
            </div>

            <div className="overviewPicture">
              <img alt="img about something"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* 
Framer motion 
Paralax = scroll functioner

npm i react-router-dom --save styled-components


Overview explaination: 


 Walkthrough

 https://beebom.com/how-build-own-ai-chatbot-with-chatgpt-api/

 step 1: Installation of python and pip
 stpe 2: Install OpenAI and Gardio 
 step 3: Code editor
 step 4: Get the API key
 step 5: Code
 step 6: Personalize the chatbot

*/
export default App;

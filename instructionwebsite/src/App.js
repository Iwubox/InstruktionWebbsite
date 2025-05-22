import "./App.css";
import { useState } from "react";
import { motion} from "framer-motion";

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

  let scrollAnimationDown = () =>{
    console.log("jdwauhdwhuaduhwahudhauwduhadhuaw")
  window.scrollTo({top: 3000, behavior: "smooth"})
  }

  let scrollAnimationUp = () =>{
        console.log("jdwauhdwhuaduhwahudhauwduhadhuaw")

  window.scrollTo({top: 3000, behavior: "smooth"})
  }

  return (
    <div className="app">
      <motion.div className="navbar"
        initial={{y:-300}}
        animate={{y:0}}
         transition={{delay: 2, duration: 0.75}}
      >
        <div className="navLeft">
          <div className="logo">RoboYap</div>
        </div>
        <div className="navRight">
          <div className="navItem">
            <p>Guide</p>
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
      </motion.div>

      <div className="banner">
        <div className="introMegaTextCointainer">
          <div className="introMegaText">
            <motion.div className="MT1"
            initial={{y:325, scale: 1.75}}
            animate={{y:0, scale: 1}}
            transition={{delay: 2, duration: 0.75}}
            >
              <p>Making your own</p>
            </motion.div>
            <motion.div className="MT2"
            initial={{y:400, scale: 1.75}}
            animate={{y:0, scale: 1}}
            transition={{delay: 2.1, duration: 0.75}}
            >
              <p>AI chatbot</p>
            </motion.div>
          </div>
        </div>

        <motion.div className="whereRU"
          initial={{x:-300}}
          animate={{x:0}}
          transition={{delay: 2, duration: 0.75}}
        >
          <div className="whereRUBox">
            <div className="whereRUsymbol1"></div>
            <p>Introduction</p>
          </div>
          <div className="whereRUBox">
            <div className="whereRUsymbol2"></div>
            <p>Overview</p>
          </div>
          <div className="whereRUBox">
            <div className="whereRUsymbol3"></div>
            <p>Getting Started</p>
          </div>
          <div className="whereRUBox">
            <div className="whereRUsymbol4"></div>
            <p>Next Steps</p>
          </div>
        </motion.div>

        <motion.div className="introFunFact"
          initial={{x:1000}}
          animate={{x:0}}
          transition={{delay: 2, duration: 0.75}}
        >
          <div className="introFunFactImg">
            <img alt="img here"></img>
          </div>
          <div className="introFunFactText">
            <p>text discrip</p>
          </div>
        </motion.div>

        <motion.div className="chatBotExample"
          initial={{y:300}}
          animate={{y:0}}
          transition={{delay: 2, duration: 0.75}}
        >
          <div className="chatBotBox">
            <p></p>
          </div>
        </motion.div>
      </div>

      <motion.div 
      className="bob"
      whileInView={scrollAnimationDown()}
      viewport={{once:false}}
      >
      </motion.div>

      <motion.div className="bobby"
       whileInView={scrollAnimationUp()}
        viewport={{once:false}}
        >
       </motion.div>


      <div className="overview">
        <div className="overviewContent">
          <div className="overviewTextBox">
            <p>Mamma mia visidwuadhwauhdwauhdwahudwauhdawhuduhwaduhwadhuwaduhwahudawhudahudwahudwauhdwahuduhwadhuwahduawhudwauhdwuhadhuwahudwahudwahudawuhdwahudwuhadhu</p>
            <p>jdwajidwajuidwajidwjaidijwajidwjidw</p>
            <p>hwdauhdwauhdwhaudhuwauhdwuhdwahudwhua</p>
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



Overview explaination: 

  Huggin face för att hitta stack



 Walkthrough
*/
export default App;

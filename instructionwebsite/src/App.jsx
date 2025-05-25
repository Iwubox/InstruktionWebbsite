import "./App.css";
import { useState, useRef, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

//imges
import hamburgerPNG from "./resorces/hambugerMenu.png";
import footerPNG from "./resorces/FromCyberpunksWebsite.png";

/*TODO 
Ändra get elementByClassName


*/

function App() {
  //scroll logic -----
  const { scrollYProgress } = useScroll();

  const [navBG, setNavBG] = useState(false);
  const [whereRUstate, setWhereRUstate] = useState(1);

  useMotionValueEvent(scrollYProgress, "change", (newScrollProgress) => {
    if (newScrollProgress > 0.01) {
      console.log(newScrollProgress);
      setNavBG(true);
    } else {
      setNavBG(false);
    }

    if (newScrollProgress < 0.07) {
      setWhereRUstate(1);
    } else if (newScrollProgress < 0.5) {
      setWhereRUstate(2);
    } else if (newScrollProgress < 0.9) {
      setWhereRUstate(3);
    } else if (newScrollProgress <= 1) {
      setWhereRUstate(4);
    }

    console.log(whereRUstate);
  });

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
    } else if (flipflop === false) {
      hamburger.style.rotate = "0deg";
      hamburger.style.transition = "0.5s";

      hamburgerList.style.display = "none";

      flipflop = true;
    } else {
      alert("Error: flipflop ");
    }
  };

  const [visable, setVisable] = useState(false);

  let guideMenu = () => {
    setVisable((prev) => !prev);
  };

  return (
    <div className="app">
      <motion.div
        className="navbar"
        initial={{ y: -300 }}
        animate={{ y: 0 }}
        transition={{ delay: 2, duration: 0.75 }}
      >
        <motion.div
          className="navBarBG"
          initial={{ opacity: 0 }}
          animate={navBG ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.2, duration: 0.75 }}
        ></motion.div>

        <div className="navLeft">
          <div className="logo">RoboYap</div>
        </div>
        <div className="navRight">
          <div className="navItem" onClick={guideMenu}>
            <p>Guide</p>
          </div>
          <div className="navItem">
            <p>About</p>
          </div>
          <div className="navItem">
            <p>Contact</p>
          </div>

          <motion.div
            className="guideMenu"
            initial={{ opacity: 0 }}
            animate={{ opacity: visable ? 1 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="guideMenuContent">
              <motion.div
                className="guideMenuBox"
                initial={{ x: 0 }}
                whileHover={{ x: -40 }}
              >
                {" "}
                <a href="#overview">1: Overview</a>
              </motion.div>
              <motion.div
                className="guideMenuBox"
                initial={{ x: 0 }}
                whileHover={{ x: -40 }}
              >
                {" "}
                <a href="">2: Installing python and pip</a>
              </motion.div>
              <motion.div
                className="guideMenuBox"
                initial={{ x: 0 }}
                whileHover={{ x: -40 }}
              >
                {" "}
                <a href="">3: Download VS code</a>
              </motion.div>
              <motion.div
                className="guideMenuBox"
                initial={{ x: 0 }}
                whileHover={{ x: -40 }}
              >
                {" "}
                <a href="">4: Get API key</a>
              </motion.div>
              <motion.div
                className="guideMenuBox"
                initial={{ x: 0 }}
                whileHover={{ x: -40 }}
              >
                {" "}
                <a href="">5: Coding</a>
              </motion.div>
              <motion.div
                className="guideMenuBox"
                initial={{
                  x: 0,
                  clipPath: "polygon(0 0, 0 100%, 80% 100%, 100% 10%, 100% 0)",
                }}
                whileHover={{
                  x: -40,
                  clipPath: "polygon(0 0, 0 100%, 80% 100%, 100% 10%, 100% 0)",
                }}
              >
                {" "}
                <a href="">6: Personalize your chatbot</a>
              </motion.div>
            </div>
          </motion.div>

          <motion.div className="hamburgerMenu" onClick={hamburgerMenu}>
            <img src={hamburgerPNG} alt="hamburger menu"></img>
          </motion.div>
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
          <motion.div
            className="MT1"
            initial={{ y: "0", x: "0", scale: "1" }}
            animate={{
              y: ["0", "0", "-20vh"],
              x: ["0", "-20vw", "-20vw"],
              scale: 1,
            }}
            transition={{
              delay: 2,
              duration: 2,
              times: [0, 0.5, 1],
              ease: "easeInOut",
            }}
          >
            <p>Robo</p>
          </motion.div>
          <motion.div
            className="MT2"
            initial={{ y: "0", x: "0", scale: "1" }}
            animate={{
              y: ["0", "0", "20vh"],
              x: ["0", "20vw", "20vw"],
              scale: 1,
            }}
            transition={{
              delay: 2,
              duration: 2,
              times: [0, 0.5, 1],
              ease: "easeInOut",
            }}
          >
            <p>Yap</p>
          </motion.div>
        </div>

        <motion.div
          className="whereRU"
          initial={{ x: -300 }}
          animate={{ x: 0 }}
          transition={{ delay: 2, duration: 0.75 }}
        >
          <div className="whereRUBox">
            <motion.div
              className="whereRUsymbol1"
              initial={{ opacity: 0.7, x: 0, clipPath: "circle(50%)" }}
              animate={
                whereRUstate === 1
                  ? {
                      opacity: 1,
                      x: 5,
                      clipPath: "polygon(50% 0%, 100% 50%, 50% 100%",
                    }
                  : { opacity: 0.7, x: 0, clipPath: "circle(50%)" }
              }
              transition={{ duration: 0.25, delay: 0.5 }}
            ></motion.div>
            <motion.div
              initial={{ x: 0 }}
              animate={whereRUstate === 1 ? { x: 20 } : { x: 0 }}
              transition={{ duration: 0.25, delay: 0.5 }}
            >
              <p>Introduction</p>
            </motion.div>{" "}
          </div>
          <div className="whereRUBox">
            <motion.div
              className="whereRUsymbol2"
              initial={{ opacity: 0.7, x: 0, clipPath: "circle(50%)" }}
              animate={
                whereRUstate === 2
                  ? {
                      opacity: 1,
                      x: 5,
                      clipPath: "polygon(50% 0%, 100% 50%, 50% 100%",
                    }
                  : { opacity: 0.7, x: 0, clipPath: "circle(50%)" }
              }
              transition={{ duration: 0.25, delay: 0.5 }}
            ></motion.div>
            <motion.div
              initial={{ x: 0 }}
              animate={whereRUstate === 2 ? { x: 20 } : { x: 0 }}
              transition={{ duration: 0.25, delay: 0.5 }}
            >
              <p>Overview</p>
            </motion.div>{" "}
          </div>
          <div className="whereRUBox">
            <motion.div
              className="whereRUsymbol3"
              initial={{ opacity: 0.7, x: 0, clipPath: "circle(50%)" }}
              animate={
                whereRUstate === 3
                  ? {
                      opacity: 1,
                      x: 5,
                      clipPath: "polygon(50% 0%, 100% 50%, 50% 100%",
                    }
                  : { opacity: 0.7, x: 0, clipPath: "circle(50%)" }
              }
              transition={{ duration: 0.25, delay: 0.5 }}
            ></motion.div>
            <motion.div
              initial={{ x: 0 }}
              animate={whereRUstate === 3 ? { x: 20 } : { x: 0 }}
              transition={{ duration: 0.25, delay: 0.5 }}
            >
              <p>Start</p>
            </motion.div>{" "}
          </div>
          <div className="whereRUBox">
            <motion.div
              className="whereRUsymbol4"
              initial={{ opacity: 0.7, x: 0, clipPath: "circle(50%)" }}
              animate={
                whereRUstate === 4
                  ? {
                      opacity: 1,
                      x: 5,
                      clipPath: "polygon(50% 0%, 100% 50%, 50% 100%",
                    }
                  : { opacity: 0.7, x: 0, clipPath: "circle(50%)" }
              }
              transition={{ duration: 0.25, delay: 0.5 }}
            ></motion.div>
            <motion.div
              initial={{ x: 0 }}
              animate={whereRUstate === 4 ? { x: 20 } : { x: 0 }}
              transition={{ duration: 0.25, delay: 0.5 }}
            >
              <p>Next Steps</p>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          className="introFunFact"
          initial={{ x: 1000 }}
          animate={{ x: 0 }}
          transition={{ delay: 2, duration: 0.75 }}
        >
          <div className="introFunFactImg">
            <img alt="img here"></img>
          </div>
          <div className="introFunFactText">
            <p>text discrip</p>
          </div>
        </motion.div>

        <motion.div
          className="technoStyle"
          animate={{}}
          transition={{ duration: 2, repeat: Infinity, repeatType: "loop" }}
        ></motion.div>

        <motion.div
          className="technoStyle2"
          animate={{}}
          transition={{ duration: 2, repeat: Infinity, repeatType: "loop" }}
        ></motion.div>
      </div>

      <div className="blackSpace"></div>

      <div className="overview" id="overview">
        <motion.div className="overviewTextBox">
          <p>
            There are many ways of creating your own AI chatbot. When creating
            your own AI chatbot you will first need to pick a stack and in this
            tutorial we will be using OpenAi's stack. These come with different
            restrictions and limitations but by using OpenAIs api you will not
            need a strong CPU or GPU. This tutorial will be using the coding
            language python and you will need no prior knowlage for this
            tutorial.
          </p>
        </motion.div>

        <div className="overviewRight">
          <div className="walk">
            <p>Complete walkthough</p>
            <video alt="walkthough video"></video>
          </div>

          <div className="overviewPicture">
            <img alt="img about something"></img>
          </div>
        </div>
      </div>

      <div className="blackSpace"></div>

      <div className="overview">
        <div className="overviewContent">
          <div>
            <div>
              <img alt="img here"></img>
            </div>
            <p>about img</p>
          </div>
          <div>
            <p>text wind up here</p>
          </div>
        </div>
      </div>

      <div className="blackSpace2"></div>

      <div className="footer">
        <img src={footerPNG} alt=""></img>
        <div className="footerContent">
          <div>
            <p>All rights reserved | © RoboYap</p>
          </div>
          <div className="contact">
            <p>contact us:</p>
            <a href="#">Instagram</a>
            <a href="#">Facebook</a>
            <a>Mail: RoboYap@gmail.com</a>
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


 Walkthrough

 step 2: install pip and python
 step 3: download ide
 step 4: Get Open Ai key
 step 5: code 
 step 6: personalize your bot
*/
export default App;

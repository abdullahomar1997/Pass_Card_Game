import React from "react";
import "./Header.css";
import { AiOutlineFullscreen } from "react-icons/ai";
import { ImMenu3 } from "react-icons/im";
import { AiOutlineRollback } from "react-icons/ai";

const Header = () => {
  // var time = 600;

  // function countdown() {
  //   var min = Math.floor(time(60));
  //   var sec = time % 60;
  //   var count = document.getElementById("countdown");
  //   count.innerHTML = `${min}:${sec}`;

  //   time--;
  // }

  // setInterval(countdown, 1000);

  // const maximizableElement = React.useRef(null);
  // let isFullscreen, setIsFullscreen;
  // let errorMessage;

  // let backgroundColor = "#efefef";

  // try {
  //   [isFullscreen, setIsFullscreen] = useFullscreenStatus(maximizableElement);
  // } catch (e) {
  //   errorMessage = "Fullscreen not supported";
  //   isFullscreen = false;
  //   setIsFullscreen = undefined;
  // }

  // const handleExitFullscreen = () => document.exitFullscreen();

  return (
    <header className="grid-container">
      <div className="header__icon">
        <ImMenu3 size={"1.5rem"} />
      </div>
      <div className="header__icon">
        <AiOutlineRollback size={"1.5rem"} />
      </div>

      <div className="header__text">
        <div>Easfy</div>
        <div></div>
        <div id="countdown"></div>
      </div>

      <div className="header__icon">
        <AiOutlineFullscreen size={"1.5rem"} />
      </div>
    </header>
  );
};

export default Header;

import React, { useState, useEffect } from "react";
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img
        className="nav_logo"
        src="https://wra360netflix.weebly.com/uploads/5/1/7/2/51728063/3641071.png?490"
        alt="Netflix Logo"
      />

      <img
        className="nav_avatar"
        src="https://raw.githubusercontent.com/CleverProgrammers/pwj-netflix-clone/master/assets/profile__logo.png"
        alt="Netflix Logo"
      />
    </div>
  );
}

export default Nav;

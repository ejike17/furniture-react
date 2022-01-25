import React from "react";
import Navigation1 from "./Navigation1";
import Navigation2 from "./Navigation2";

function MainNavigation() {

  function navbar() {
    const navShowBtn = document.querySelector('.navbar-show-btn');
const navHideBtn = document.querySelector('.navbar-hide-btn');
const sideNavbar = document.getElementById('side-navbar');
navShowBtn.addEventListener('click', () => {
  sideNavbar.classList.add('side-navbar-show');
});

navHideBtn.addEventListener('click', () => {
  sideNavbar.classList.remove('side-navbar-show');
});
    
  }

  return (
    <div className="container flex" onClick={navbar}>
          <Navigation1 />
          <Navigation2 />
    </div>
  );
}

export default MainNavigation;

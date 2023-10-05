import React from 'react'
import logo from "../../logo.svg";
import './Navbar.css';

const Navbar = () => {
  return (
    <nav>
      <div className="navbar">
        <div className="logo">
          <a href="#home" id='logo'>
            <img src={logo} alt="code-snippets" />
          </a>
        </div>
        <div className="navbar-items">
          <a href="#">What this is ?</a>
          <a href="#">How to use ?</a>
          <a href="#">@enoslyznne</a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

import React, { useState } from "react";
import './styles/Navbar.css';
import { IoReorderFour } from "react-icons/io5";


const Navbar = () => {
  const [expandNavbar, setExpandNavbar] = useState(false);
    return (
    <div className="navbar" id= {expandNavbar ? "open" : "close"}>
      <div className="toggleButton">
        <button onClick = {() => {setExpandNavbar((prev) => !prev)}}> 
          <IoReorderFour /> 
        </button>
      </div>
      <nav>
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contacts</a>
      </nav>
    </div>
    )
}
export default Navbar
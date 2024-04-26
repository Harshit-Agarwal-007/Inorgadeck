import React from "react";
import logo from "./LOGO.png";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

function Navbar() {
  return (
    <div className="fixed z-[999] w-full px-20 py-3 font-['Neue Montreal'] flex justify-between items-center backdrop-blur-sm text-white">
      <div className="logo">
        <img src={logo} alt="logo" className="w-1/2 h-1/2" />
      </div>

      <div className="links flex gap-10">
        <nav>
        <ScrollLink
            to="landing"
            smooth={true}
            duration={500}
            className="text-lg capitalize font-light px-10"
          >
            Home
          </ScrollLink>
        
        <ScrollLink
            to="about"
            smooth={true}
            duration={500}
            className="text-lg capitalize font-light px-10"
          >
            About us
          </ScrollLink>

          <ScrollLink
            to="insights"
            smooth={true}
            duration={500}
            className="text-lg capitalize font-light px-10"
          >
            Insights
          </ScrollLink>

          <ScrollLink
            to="contact"
            smooth={true}
            duration={500}
            className="text-lg capitalize font-light px-10"
          >
            Contact us
          </ScrollLink>

          

          
        </nav>
      </div>
    </div>
  );
}

export default Navbar;

import { useState } from "react";
import "../css/navbar.css";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from "./Home"
import About from "./About";
import Contact from "./Contact"
import logo from "../videos/ubc_vector1.svg";

export default function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <nav className="navigation">
      <a href="/home" className="brand-name">
        <img src = {logo} alt="UBC logo" style={{height: "6rem"}}></img>
      </a>
      {/* hamburger hasnt been used yet, the work is to show a dropdown button when the size reduces */}
      <button
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      >
        {/* icon from Heroicons.com */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        } style={{paddingRight: "1rem"}}
      >
        {/* calling */}
      <ul>
      <li>
          <a style={{color: "black", fontSize: "20px"}} href="/home">Home</a>
        </li>
        <li>
          <a style={{color: "black", fontSize: "20px"}} href="/About">About</a>
        </li>
        <li>
          <a  style={{color: "black", fontSize: "20px"}} href="/Contact">Contacts</a>
        </li>
      </ul>
      </div>
    </nav>
  );
}

// src/components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";

const linkStyle = {
    textDecoration: 'none', // Remove underline
    color: 'black', // Set the text color to black (or any color you prefer)
    margin: '0 10px', // Add some spacing between links
    color: 'white'
  };

function Navbar() {
  return (
    <nav>
      <div>
        {/* <h1>Dictionary App</h1> */}
      </div>
      <div className="nav-bar" >
        <div>
          <p>Dictionary App</p>
        </div>
        <div className="links">
            <Link to="/" style={linkStyle}>Home</Link>
            <Link style={linkStyle} to="/history">History</Link>
          </div>
      </div>
    </nav>
  );
}

export default Navbar;

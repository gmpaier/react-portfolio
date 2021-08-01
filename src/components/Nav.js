import React from "react";
import { Link } from "react-router-dom";



function Nav() {
  return (
    <header className="container-fluid text-center">
      <h2>Griffin Paier</h2>
      
      <nav className="navbar navbar-expand-lg navbar-light bg-secondary">
        <div className="container-fluid justify-content-center">
          <div className="navbar-nav">
            <Link to="/" className="nav-link">
              About Me
            </Link>
            <Link to="/project" className="nav-link">
              Projects
            </Link>
            {/* <Link to="/contact" className="nav-link">
              Contact
            </Link> */}
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Nav;

import React from "react";

import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-start">
        <Link to="/" className="navbar-item">
          CENTO
        </Link>
      </div>
      <div className="navbar-end"></div>
    </div>
  );
}

export default Navbar;

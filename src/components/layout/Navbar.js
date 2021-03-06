import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <div>
      <nav className="navbar navbar-light bg-dark mb-5">
        <div className="container">
          <div className="navbar-header">
            <Link className="navbar-brand text-white text-lg brand-text" to="/">
              <i className="fab fa-imdb fa-5x" id="imdb-logo" />
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

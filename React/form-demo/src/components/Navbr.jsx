import React from "react";

const Navbr = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <span className="navbar-brand" href="#">
            Navbar w/ text
          </span>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <span className="nav-link active" aria-current="page" href="#">
                  Home
                </span>
              </li>
              <li className="nav-item">
                <span className="nav-link" href="#">
                  Features
                </span>
              </li>
              <li className="nav-item">
                <span className="nav-link" href="#">
                  Pricing
                </span>
              </li>
            </ul>
            <span className="navbar-text">
              Navbar text with an inline element
            </span>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbr;

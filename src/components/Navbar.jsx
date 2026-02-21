import { NavLink, useLocation } from "react-router-dom";

import BudgetModeBtn from "./BudgetModeBtn";

export default function Navbar() {
  let location = useLocation();
  let inProducts;
  location.pathname === "/products" ? (inProducts = true) : (inProducts = false);

  return (
    <header className="sticky-top">
      <nav
        className="navbar navbar-expand-lg bg-dark border-bottom border-body"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <h1 className="text-white">Random Shop 🛒</h1>
          {/* hamburger menu */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            {/* budget btn, only in products page */}
            {inProducts && <BudgetModeBtn />}
            {/* link-list */}
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink to="/" className="nav-link">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/about-us" className="nav-link">
                  About Us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/products" className="nav-link">
                  Products
                </NavLink>
              </li>
            </ul>
            {/* search */}
            <div className="d-flex align-items-center gap-2">
              <input
                name="searchbar"
                className="form-control"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-primary">
                <i className="bi bi-search"></i>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

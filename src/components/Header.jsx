import { NavLink } from "react-router-dom";

const handleSubmit = (e) => {
  e.preventDefault();
};

export default function Header() {
  return (
    <header className="sticky-top">
      <nav
        className="navbar navbar-expand-lg bg-dark border-bottom border-body"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <h1 className="text-white">Random Shop 🛒</h1>
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
          <div className="collapse navbar-collapse justify-content-end gap-4" id="navbarNav">
            <ul className="navbar-nav gap-3">
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
            <form onSubmit={handleSubmit} className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-primary">
                <i className="bi bi-search"></i>
              </button>
            </form>
          </div>
        </div>
      </nav>
    </header>
  );
}

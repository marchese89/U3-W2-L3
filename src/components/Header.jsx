import { Link, useLocation } from "react-router-dom";

export default function Header({ setSearch }) {
  const location = useLocation();
  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <header>
      <nav className="d-flex align-items-center">
        <div id="logo">
          <img
            src="/assets/netflix_logo.png"
            alt="logo"
            className="mb-3 ps-0"
          />
        </div>
        <ul className="list-unstyled text-white d-flex ms-3">
          <li className="me-3">
            <Link to="/" className="link">
              Home
            </Link>
          </li>
          <li className="me-3 fw-bold">TV Shows</li>
          <li className="me-3">Movies</li>
          <li className="me-3">Recently Added</li>
          <li className="me-3">My List</li>
          <li className="me-3">
            <Link to="/profile" className="link">
              Profile
            </Link>
          </li>
          <li className="me-3">
            <Link to="/settings" className="link">
              Settings
            </Link>
          </li>
          <li>
            <Link to="tv-shows" className="link">
              TV Shows
            </Link>
          </li>
        </ul>
        <div
          id="nav-right"
          className="d-flex flex-grow-1 justify-content-end align-items-center text-white"
        >
          <i className="bi bi-search me-3"></i>
          <input
            placeholder={
              location.pathname === "/tv-shows"
                ? "Cerca Serie TV..."
                : "Cerca film"
            }
            className="search-input me-2"
            onChange={handleInputChange}
          />
          <span className="text-white me-3">KIDS</span>
          <i className="bi bi-bell text-white me-3"></i>
          <img src="/assets/avatar.png" alt="avatar" id="avatar" />
          <i className="bi bi-caret-down-fill text-white ms-1 fs-6"></i>
        </div>
      </nav>
    </header>
  );
}

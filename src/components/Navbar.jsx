import { Link } from "react-router-dom";
import logo from "../assets/Logo.svg";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">
        <img src={logo} alt="logo" className="logo" />
      </Link>
      <ul className="navbar-link-container">
        <li className="navbar-link-item">
          <Link to="/" className="navbar-link">
            home
          </Link>
        </li>
        <li className="navbar-link-item">
          <Link to="#" className="navbar-link">
            about
          </Link>
        </li>
        <li className="navbar-link-item">
          <Link to="#" className="navbar-link">
            menu
          </Link>
        </li>
        <li className="navbar-link-item">
          <Link to="#" className="navbar-link">
            registration
          </Link>
        </li>
        <li className="navbar-link-item">
          <Link to="#" className="navbar-link">
            order online
          </Link>
        </li>
        <li className="navbar-link-item">
          <Link to="#" className="navbar-link">
            login
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

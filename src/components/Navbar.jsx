import logo from "../assets/Logo.svg";

function Navbar() {
  return (
    <nav className="navbar">
      <img src={logo} alt="logo" className="logo" />
      <ul className="navbar-link-container">
        <li className="navbar-link-item">
          <a href="#" className="navbar-link">
            home
          </a>
        </li>
        <li className="navbar-link-item">
          <a href="#" className="navbar-link">
            about
          </a>
        </li>
        <li className="navbar-link-item">
          <a href="#" className="navbar-link">
            menu
          </a>
        </li>
        <li className="navbar-link-item">
          <a href="#" className="navbar-link">
            registration
          </a>
        </li>
        <li className="navbar-link-item">
          <a href="#" className="navbar-link">
            order online
          </a>
        </li>
        <li className="navbar-link-item">
          <a href="#" className="navbar-link">
            login
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

import restaurantFood from "../assets/restauranfood.jpg";

function Footer() {
  return (
    <footer className="footer">
      <img src={restaurantFood} alt="Restaurant Food" className="footer-img" />
      <div className="footer-container">
        <div>
          <h3>Doormat Navigation</h3>
          <ul className="footer-link-container">
            <li className="footer-link-item">
              <a className="footer-link" href="#">
                home
              </a>
            </li>
            <li className="footer-link-item">
              <a className="footer-link" href="#">
                about
              </a>
            </li>
            <li className="footer-link-item">
              <a className="footer-link" href="#">
                menu
              </a>
            </li>
            <li className="footer-link-item">
              <a className="footer-link" href="#">
                registration
              </a>
            </li>
            <li className="footer-link-item">
              <a className="footer-link" href="#">
                order online
              </a>
            </li>
            <li className="footer-link-item">
              <a className="footer-link" href="#">
                login
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3>Contact</h3>
          <ul className="footer-link-container">
            <li className="footer-link-item">Address</li>
            <li className="footer-link-item">Phone number</li>
            <li className="footer-link-item">Email</li>
          </ul>
        </div>

        <div>
          <h3>Social Media Links</h3>
          <ul className="footer-link-container">
            <li className="footer-link-item">
              <a className="footer-link" href="https://facebook.com">
                Facebook
              </a>
            </li>
            <li className="footer-link-item">
              <a className="footer-link" href="https://twitter.com">
                X
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

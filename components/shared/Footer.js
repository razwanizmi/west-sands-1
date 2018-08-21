import "./footer.scss";

const Footer = () => (
  <footer className="transparent-footer">
    <div className="transparent-footer__column">
      <img
        src="static/images/logo-footer.svg"
        alt="West Sands logo"
        className="footer-logo"
      />
      <address className="mb-0">
        <span className="transparent-footer__header">West Sands Ukulhas</span>
        Maldives
        <br />
        Ukulhas 09030, North Ari Atoll
      </address>
    </div>
    <div className="transparent-footer__column">
      <i className="fas fa-phone" /> (+960) 965-1515
      <br />
      <i className="fab fa-whatsapp" /> (+960) 965-1515
      <br />
      <i className="far fa-envelope" /> info@westsandsukulhas.com
    </div>
    <div className="transparent-footer__column transparent-footer__column--right">
      <a
        href="https://www.facebook.com/Westsandsukulhas/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-facebook-f" />
      </a>
      <a
        href="https://twitter.com/westsandsmv"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-twitter" />
      </a>
      <a
        href="https://www.instagram.com/westsandsukulhas/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-instagram" />
      </a>
      <a
        href="https://www.tripadvisor.com/Hotel_Review-g3823213-d12097640-Reviews-West_Sands-Ukulhas.html"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="fab fa-tripadvisor" />
      </a>
    </div>
  </footer>
);

export default Footer;

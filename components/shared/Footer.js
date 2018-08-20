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
        <span className="transparent-footer__header">
          West Sands at Ukulhas
        </span>
        Vashamagu, Ukulhas 09030
        <br />
        North Ari Atoll, Maldives.
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
      <a href="#facebook">
        <i className="fab fa-facebook-f" />
      </a>
      <a href="#twitter">
        <i className="fab fa-twitter" />
      </a>
      <a href="#instagram">
        <i className="fab fa-instagram" />
      </a>
    </div>
  </footer>
);

export default Footer;

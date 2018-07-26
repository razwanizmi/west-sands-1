import "./navbar.scss";

class Navbar extends React.Component {
  render() {
    return (
      <nav className="nav">
        <ul className="nav-links">
          <li className="nav-links__wrapper">
            <a href="/">
              <i className="fas fa-home" />
            </a>
          </li>
          <li className="nav-links__wrapper nav-links__wrapper--hoverable">
            <a href="/hotel">HOTEL</a>
          </li>
          <li className="nav-links__wrapper nav-links__wrapper--hoverable">
            <a href="/activities">ACTIVITIES</a>
          </li>
        </ul>
        <div className="nav-links">
          <a
            href="http://app.axisrooms.com/beV2/home1.html?bookingEngineId=2444"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-button"
          >
            BOOK NOW
          </a>
        </div>
      </nav>
    );
  }
}

export default Navbar;

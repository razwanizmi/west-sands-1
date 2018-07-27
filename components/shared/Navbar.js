import "./navbar.scss";

class Navbar extends React.Component {
  state = {
    tint: false
  };

  handleScroll = () => {
    this.setState(() => ({
      tint: scrollY > innerHeight ? true : false
    }));
  };

  componentDidMount() {
    addEventListener("scroll", this.handleScroll);
  }

  render() {
    const { tint } = this.state;

    return (
      <nav className={`nav ${tint ? "nav--tinted" : ""}`}>
        <div className="nav-links">
          <a href="/" className="nav-links__link">
            <i className="fas fa-home" />
          </a>
          <a
            href="/hotel"
            className="nav-links__link nav-links__link--hoverable"
          >
            HOTEL
          </a>
          <a
            href="/activities"
            className="nav-links__link nav-links__link--hoverable"
          >
            ACTIVITIES
          </a>
        </div>
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

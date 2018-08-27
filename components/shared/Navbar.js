import AnchorLink from "react-anchor-link-smooth-scroll";
import "./navbar.scss";

const SideNav = ({ show, onHide }) => (
  <div className="side-nav">
    <div
      className={`side-nav__overlay ${show ? "side-nav__overlay--active" : ""}`}
      onClick={onHide}
    />
    <div className={`side-nav__menu ${show ? "side-nav__menu--active" : ""}`}>
      {show && (
        <div className="side-menu">
          <div className="side-menu__header">
            <a href="javascript:void(0)" onClick={onHide}>
              <img src="/static/images/cross.svg" alt="Close menu icon" />
            </a>
          </div>
          <div className="side-menu__body">
            <div className="menu-items">
              <div className="menu-items__item">
                <AnchorLink
                  href="#home"
                  className="menu-items__link"
                  onClick={onHide}
                >
                  HOME
                </AnchorLink>
              </div>
              <div className="menu-items__item">
                <AnchorLink
                  href="#hotel"
                  className="menu-items__link"
                  onClick={onHide}
                >
                  HOTEL
                </AnchorLink>
              </div>
              <div className="menu-items__item">
                <AnchorLink
                  href="#activities"
                  className="menu-items__link"
                  onClick={onHide}
                >
                  ACTIVITIES
                </AnchorLink>
              </div>
            </div>
            <a
              href="https://app.axisrooms.com/beV2/home1.html?bookingEngineId=2444"
              target="_blank"
              rel="noopener noreferrer"
              className="menu-items__btn"
              onClick={onHide}
            >
              BOOK NOW
            </a>
            <a
              href="mailto:info@westsandsukulhas.com"
              className="menu-items__btn"
              onClick={onHide}
            >
              ENQUIRE
            </a>
          </div>
        </div>
      )}
    </div>
  </div>
);

class Navbar extends React.Component {
  state = {
    hasTint: false,
    showSideNav: false
  };

  handleScroll = () => {
    this.setState(() => ({
      hasTint: scrollY > innerHeight ? true : false
    }));
  };

  hideSideNav = () => {
    this.setState(() => ({
      showSideNav: false
    }));
  };

  showSideNav = () => {
    this.setState(() => ({
      showSideNav: true
    }));
  };

  componentDidMount() {
    addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    removeEventListener("scroll", this.handleScroll);
  }

  render() {
    const { hasTint, showSideNav } = this.state;

    return (
      <>
        <nav className={`nav ${hasTint ? "nav--tint" : ""}`}>
          <div className="nav-links">
            <AnchorLink href="#home" className="nav-links__link">
              <img
                src="/static/images/logo-header.svg"
                alt="West Sands logo"
                className="nav-logo"
              />
            </AnchorLink>
            <AnchorLink
              href="#hotel"
              className="nav-links__link nav-links__link--hoverable"
            >
              HOTEL
            </AnchorLink>
            <AnchorLink
              href="#activities"
              className="nav-links__link nav-links__link--hoverable"
            >
              ACTIVITIES
            </AnchorLink>
          </div>
          <div className="nav-links">
            <a
              href="https://app.axisrooms.com/beV2/home1.html?bookingEngineId=2444"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-btn"
            >
              BOOK NOW
            </a>
            <a
              href="mailto:info@westsandsukulhas.com"
              className="nav-btn nav-btn--ghost"
            >
              ENQUIRE
            </a>
          </div>
          <div className="nav-links nav-links--mobile">
            <div className="nav-links__link nav-links__link--burger">
              <img
                src="static/images/logo-header.svg"
                alt="West Sands logo"
                className="nav-logo"
              />
            </div>
          </div>
          <div className="nav-links nav-links--mobile">
            <a
              href="javascript:void(0)"
              onClick={this.showSideNav}
              className="nav-links__link nav-links__link--burger"
            >
              <img src="/static/images/burger.svg" alt="Open menu icon" />
            </a>
          </div>
        </nav>
        <SideNav onHide={this.hideSideNav} show={showSideNav} />
      </>
    );
  }
}

export default Navbar;

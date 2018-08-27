import Link from "next/link";
import "./under-construction.scss";

const UnderConstruction = () => (
  <div className="construction">
    <div className="container--wide">
      <div className="hero-text">
        <Link href="/">
          <a>
            <img
              src="/static/images/logo-header.svg"
              alt="West Sands logo"
              class="construction__logo"
            />
          </a>
        </Link>
        <h2 className="hero-text__h2">ROOMS PAGE COMING SOON</h2>
        <p className="hero-text__p">
          Please check back again later. For now, you can email us at{" "}
          <a
            href="mailto:info@westsandsukulhas.com"
            className="construction__link"
          >
            info@westsandsukulhas.com
          </a>{" "}
          for more details.
        </p>
      </div>
    </div>
  </div>
);

export default UnderConstruction;

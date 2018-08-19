import Slider from "react-slick";
import "./hotel.scss";

const rooms = [
  {
    id: 0,
    name: "ROOMS",
    description:
      "The space and privacy you are looking for, with all amenities and luxuries.",
    imageUrl: "static/images/rooms.jpg"
  },
  {
    id: 1,
    name: "SUITES",
    description:
      "The space and privacy you are looking for, with all amenities and luxuries.",
    imageUrl: "static/images/suites.jpg"
  },
  {
    id: 2,
    name: "FAMILY SUITES & APARTMENTS",
    description:
      "The space and privacy you are looking for, with all amenities and luxuries.",
    imageUrl: "static/images/family-suites.jpg"
  }
];

const carouselSettings = {
  arrows: true,
  dots: true,
  infinite: false,
  slidesToScroll: 1,
  slidesToShow: 3
};

class Hotel extends React.Component {
  render() {
    return (
      <section className="hotel" id="hotel">
        <div className="titled-box">
          <div className="titled-box__title">
            <span>
              <i className="fas fa-minus" /> HOTEL
            </span>
          </div>
          <div className="titled-box__content">
            <h2>SPACE &bull; PRIVACY &bull; COMFORT</h2>
            <div className="hotel__description">
              <p>
                Three things matter in our rooms. Space, privacy and comfort.
                Our rooms, the largest in Ukulhas are carefully designed to
                ensure modern, linear and chic architecture while taking
                advantage of the breeze and natural climate of Maldives.
              </p>
            </div>
            <div className="large-only">
              <Slider {...carouselSettings}>
                {rooms.map(room => (
                  <div key={`room-${room.id}`} className="hotel-card">
                    <div className="hotel__tabless-container">
                      <div
                        className="hotel__tabless-image"
                        style={{ backgroundImage: `url("${room.imageUrl}")` }}
                      />
                      <div className="hotel__tabless-overlay">
                        <h3>{room.name}</h3>
                        <p>{room.description}</p>
                        <div className="hotel__btn-container">
                          <a
                            href="https://app.axisrooms.com/beV2/home1.html?bookingEngineId=2444"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hotel__room-btn"
                          >
                            BOOK
                          </a>
                          <a href="#!" className="hotel__info-btn">
                            DETAILS
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
            <div className="mobile-only">
              {rooms.map(room => (
                <div
                  key={`room-${room.id}`}
                  className="hotel__tabless-container"
                >
                  <div
                    className="hotel__tabless-image"
                    style={{ backgroundImage: `url("${room.imageUrl}")` }}
                  />
                  <div className="hotel__tabless-overlay">
                    <h3>{room.name}</h3>
                    <p>{room.description}</p>
                    <div className="hotel__btn-container">
                      <a
                        href="https://app.axisrooms.com/beV2/home1.html?bookingEngineId=2444"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hotel__room-btn"
                      >
                        BOOK
                      </a>
                      <a href="#!" className="hotel__info-btn">
                        DETAILS
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Hotel;

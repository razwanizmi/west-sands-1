import Slider from "react-slick";
import "./hotel.scss";

const rooms = [
  {
    id: 0,
    name: "ROOMS",
    description:
      "Specially designed with the solo traveler in mind. The space and privacy you are looking for, delivered with all our amenities and luxuries, at an unbeatable price. Only limited units available.",
    imageUrl: "static/images/deluxe-room.jpg"
  },
  {
    id: 1,
    name: "SUITES",
    description:
      "The rooms has a sliding door to the balcony inviting the breeze of the ocean all day long. Comes with paraquat flooring and fully air-conditioned. It gives an uninterrupted view of the beach and the ocean.",
    imageUrl: "static/images/sea-view-suite.jpg"
  },
  {
    id: 2,
    name: "FAMILY SUITES & APARTMENTS",
    description:
      "26 square meters, made in to two interconnecting rooms. A door separates two rooms. Leave it open or closed, depending on how much privacy you need. A rare combination of space and privacy.",
    imageUrl: "static/images/family-suite.jpg"
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

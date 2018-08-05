import "./hotel.scss";

const rooms = [
  {
    id: 0,
    name: "DELUXE",
    description:
      "Specially designed with the solo traveler in mind. The space and privacy you are looking for, delivered with all our amenities and luxuries, at an unbeatable price. Only limited units available.",
    imageUrl: "static/images/deluxe-room.jpg"
  },
  {
    id: 1,
    name: "SEA VIEW SUITE",
    description:
      "The rooms has a sliding door to the balcony inviting the breeze of the ocean all day long. Comes with paraquat flooring and fully air-conditioned. It gives an uninterrupted view of the beach and the ocean.",
    imageUrl: "static/images/sea-view-suite.jpg"
  },
  {
    id: 2,
    name: "FAMILY SUITE",
    description:
      "26 square meters, made in to two interconnecting rooms. A door separates two rooms. Leave it open or closed, depending on how much privacy you need. A rare combination of space and privacy.",
    imageUrl: "static/images/family-suite.jpg"
  },
  {
    id: 3,
    name: "OCEAN VIEW SUITE",
    description:
      "Superior Rooms comes with an en-suite bathtub and features a king size bed (2×2 meters), giving you comfort, space and privacy in this room. Starting from 12 Square meters and comes with full modern specifications.",
    imageUrl: "static/images/ocean-view-suite.jpg"
  },
  {
    id: 4,
    name: "GARDEN VIEW SUITE",
    description:
      "Comes with sleek interior and all modern amenities, and generously priced for a stay in Maldives. This room also features a private bathroom with pressure controlled rain-showers and parquet flooring.",
    imageUrl: "static/images/garden-view-suite.jpg"
  }
];

class Hotel extends React.Component {
  state = {
    animating: false,
    selectedTab: 0
  };

  setTab = tabId => {
    this.setState(
      () => ({ animating: true, selectedTab: tabId }),
      () =>
        setTimeout(
          () =>
            this.setState(() => ({
              animating: false
            })),
          50
        )
    );
  };

  render() {
    const { animating, selectedTab } = this.state;

    return (
      <section className="hotel" id="hotel">
        <div className="titled-box">
          <div className="titled-box__title">
            <span>
              <i className="fas fa-minus" /> HOTEL
            </span>
          </div>
          <div className="titled-box__content">
            <h2>SPACE . PRIVACY . COMFORT</h2>
            <div className="hotel__description">
              <p>
                Three things matter in our rooms. Space, privacy and comfort.
                Our rooms, the largest in Ukulhas are carefully designed to
                ensure modern, linear and chic architecture while taking
                advantage of the breeze and natural climate of Maldives.
              </p>
            </div>
            <div className="hotel__tab-list">
              {rooms.map(room => (
                <span
                  key={`room-tab-${room.id}`}
                  className={`hotel__tab ${
                    selectedTab === room.id ? "hotel__tab--active" : ""
                  }`}
                  onClick={() => this.setTab(room.id)}
                >
                  {room.name}
                </span>
              ))}
            </div>
            {rooms.map(room => (
              <div
                key={`room-panel-${room.id}`}
                className={`hotel__tab-panel ${
                  room.id === selectedTab ? "hotel__tab-panel--active" : ""
                } ${animating ? "hotel__tab-panel--animating" : ""}`}
              >
                <img
                  src={room.imageUrl}
                  alt={room.name}
                  className="hotel__tab-image"
                />
                <div className="hotel__tab-overlay">
                  <h3>{room.name}</h3>
                  <p>{room.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
}

export default Hotel;

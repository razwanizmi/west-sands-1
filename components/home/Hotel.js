import "./hotel.scss";

const rooms = [
  {
    id: 1,
    name: "DELUXE",
    description:
      "Specially designed with the solo traveler in mind. The space and privacy you are looking for, delivered with all our amenities and luxuries, at an unbeatable price. Only limited units available.",
    imageUrl: "static/images/deluxe-room.jpg"
  },
  {
    id: 2,
    name: "SEA VIEW SUITE",
    description:
      "The rooms has a sliding door to the balcony inviting the breeze of the ocean all day long. Comes with paraquat flooring and fully air-conditioned. It gives an uninterrupted view of the beach and the ocean.",
    imageUrl: "static/images/sea-view-suite.jpg"
  },
  {
    id: 3,
    name: "FAMILY SUITE",
    description:
      "26 square meters, made in to two interconnecting rooms. A door separates two rooms. Leave it open or closed, depending on how much privacy you need. A rare combination of space and privacy.",
    imageUrl: "static/images/family-suite.jpg"
  },
  {
    id: 4,
    name: "OCEAN VIEW SUITE",
    description:
      "Superior Rooms comes with an en-suite bathtub and features a king size bed (2×2 meters), giving you comfort, space and privacy in this room. Starting from 12 Square meters and comes with full modern specifications.",
    imageUrl: "static/images/ocean-view-suite.jpg"
  },
  {
    id: 5,
    name: "GARDEN VIEW SUITE",
    description:
      "Comes with sleek interior and all modern amenities, and generously priced for a stay in Maldives. This room also features a private bathroom with pressure controlled rain-showers and parquet flooring.",
    imageUrl: "static/images/garden-view-suite.jpg"
  }
];

class Hotel extends React.Component {
  state = {
    selectedTab: 1
  };

  setTab = tabId => {
    this.setState(() => ({ selectedTab: tabId }));
  };

  render() {
    const { selectedTab } = this.state;

    return (
      <div className="hotel">
        <div className="container--right">
          <h2>SPACE . PRIVACY . COMFORT</h2>
        </div>
        <div className="titled-box">
          <div className="titled-box__title">
            <span>
              <i className="fas fa-minus" /> HOTEL
            </span>
          </div>
          <div className="titled-box__content">
            <div className="hotel__description">
              <p>
                Three things matter in our rooms. Space, privacy and comfort.
                Our rooms, the largest in Ukulhas are carefully designed to
                ensure modern, linear and chic architecture while taking
                advantage of the breeze and natural climate of Maldives.
              </p>
            </div>
            <div className="hotel__tablist">
              {rooms.map(room => (
                <span
                  key={`roomtab-${room.id}`}
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
              <img
                key={`roompanel-${room.id}`}
                src={room.imageUrl}
                alt={room.name}
                className={`hotel__tabpanel ${
                  selectedTab === room.id ? "hotel__tabpanel--active" : ""
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Hotel;

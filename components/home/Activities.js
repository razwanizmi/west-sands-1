import Slider from "react-slick";
import "./activities.scss";

const currentActivities = [
  {
    id: 0,
    title: "BUCKET LIST BUSTER",
    description:
      "Experience the undersea world of the magical and the magnificent.",
    imageUrl: "static/images/activity-bucket-list-buster.jpg"
  },
  {
    id: 1,
    title: "SUN, SEA & SAND",
    description: "Good times and tan lines: the recipe for a perfect holiday.",
    imageUrl: "static/images/activity-sun-sea-sand.jpg"
  },
  {
    id: 2,
    title: "THE TROPICAL ADVENTURER",
    description: "Expolore and discover the best of this side of paradise.",
    imageUrl: "static/images/activity-tropical-adventurer.jpg"
  }
];

const carouselSettings = {
  arrows: true,
  dots: true,
  infinite: false,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1.3,
        slidesToScroll: 1
      }
    }
  ],
  slidesToScroll: 1,
  slidesToShow: 2.3
};

const Activities = () => (
  <section className="activities">
    <div className="titled-box">
      <div className="titled-box__title">
        <span>
          <i className="fas fa-minus" /> ACTIVITIES
        </span>
      </div>
      <div className="titled-box__content">
        <div className="large-only">
          <Slider {...carouselSettings}>
            {currentActivities.map(activity => (
              <div key={`activity-${activity.id}`} className="activity-card">
                <div className="activity-card__container">
                  <img
                    src={activity.imageUrl}
                    alt={activity.title}
                    className="activity-card__img"
                  />
                  <div className="activity-card__overlay">
                    <h3>{activity.title}</h3>
                    <p>{activity.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <div className="mobile-only">
          {currentActivities.map(activity => (
            <div key={`activity-${activity.id}`} className="activity-card">
              <div className="activity-card__container">
                <img
                  src={activity.imageUrl}
                  alt={activity.title}
                  className="activity-card__img"
                />
                <div className="activity-card__overlay">
                  <h3>{activity.title}</h3>
                  <p>{activity.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Activities;

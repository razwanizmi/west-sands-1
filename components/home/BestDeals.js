import Slider from "react-slick";
import "./best-deals.scss";

const currentPromotions = [
  {
    id: 0,
    title: "LAST MINUTE BLAST",
    line1: "Up to 40% off for last minute bookings",
    line2: "Valid from May to December",
    imageUrl: "/static/images/last-minute.jpg"
  },
  {
    id: 1,
    title: "EARLY BIRD OFFER",
    line1: "For bookings made 60 days ahead of arrival",
    line2: "Up to 40% off from May to December",
    imageUrl: "/static/images/early-bird.jpg"
  },
  {
    id: 2,
    title: "STAY 6, PAY 5",
    line1: "One free night for 6 nights and longer stays",
    line2: "Valid from April to December",
    imageUrl: "/static/images/stay-5.jpg"
  }
];

const carouselSettings = {
  arrows: true,
  dots: true,
  infinite: false,
  slidesToScroll: 1,
  slidesToShow: 3
};

const BestDeals = () => (
  <section className="best-deals">
    <div className="titled-box">
      <div className="titled-box__title">
        <span>
          <i className="fas fa-minus" /> PROMOTIONS
        </span>
      </div>
      <div className="titled-box__content">
        <h2>BEST DEALS</h2>
        <div className="large-only">
          <Slider {...carouselSettings}>
            {currentPromotions.map(promo => (
              <div key={`deal-${promo.id}`} className="deal-card">
                <div className="deal-card__container">
                  <div className="deal-card__figure">
                    <div
                      className="deal-card__img"
                      style={{ backgroundImage: `url(${promo.imageUrl})` }}
                    />
                  </div>
                  <div className="deal-card__overlay">
                    <div>
                      <h3>{promo.title}</h3>
                      <p className="mb-0">{promo.line1}</p>
                    </div>
                    <p className="mb-0">{promo.line2}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <div className="mobile-only">
          {currentPromotions.map(promo => (
            <div key={`deal-${promo.id}`} className="deal-card">
              <div className="deal-card__container">
                <div className="deal-card__figure">
                  <div
                    className="deal-card__img"
                    style={{ backgroundImage: `url(${promo.imageUrl})` }}
                  />
                </div>
                <div className="deal-card__overlay">
                  <div>
                    <h3>{promo.title}</h3>
                    <p className="mb-0">{promo.line1}</p>
                  </div>
                  <p className="mb-0">{promo.line2}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default BestDeals;

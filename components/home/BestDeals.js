import Slider from "react-slick";
import "./best-deals.scss";

const BestDeals = () => (
  <section className="best-deals">
    <div className="container--right">
      <h2>BEST DEALS</h2>
    </div>
    <div className="titled-box">
      <div className="titled-box__title">
        <span>
          <i class="fas fa-minus" /> PROMOTIONS
        </span>
      </div>
      <div className="titled-box__content">
        <Slider {...settings}>
          <div className="deal-card">
            <div className="deal-card__container">
              <img src="static/images/promotion-1.jpg" className="w-100" />
              <div className="deal-card__overlay">
                <div>
                  <h3>LAST MINUTE BLAST</h3>
                  <p className="mb-0">Up to 40% off for last minute bookings</p>
                </div>
                <p className="mb-0">Valid from May to December</p>
              </div>
            </div>
          </div>
          <div className="deal-card">
            <div className="deal-card__container">
              <img src="static/images/promotion-1.jpg" className="w-100" />
              <div className="deal-card__overlay">
                <div>
                  <h3>EARLY BIRD OFFER</h3>
                  <p className="mb-0">
                    For bookings made 60 days ahead of arrival
                  </p>
                </div>
                <p className="mb-0">Up to 40% off from May to December</p>
              </div>
            </div>
          </div>
          <div className="deal-card">
            <div className="deal-card__container">
              <img src="static/images/promotion-1.jpg" className="w-100" />
              <div className="deal-card__overlay">
                <div>
                  <h3>STAY 6, PAY 5</h3>
                  <p className="mb-0">
                    One free night for 6 nights and longer stays
                  </p>
                </div>
                <p className="mb-0">Valid from April to December</p>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  </section>
);

const settings = {
  slidesToShow: 2.3,
  slidesToScroll: 1,
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
  ]
};

export default BestDeals;

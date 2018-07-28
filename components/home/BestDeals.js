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
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
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
  // nextArrow: '<button type="button" class="slick-next icon fa-arrow-right"></button>',
  // prevArrow: '<button type="button" class="slick-prev icon fa-arrow-left"></button>',
  dots: true,
  infinite: false
};

export default BestDeals;

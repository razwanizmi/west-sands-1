import Slider from "react-slick";
import "./testimonials.scss";

const testimonials = [
  {
    id: 1,
    quote:
      '"The hotel is situated very near to the tourist beach. The place is calm and clean with clear beach waters and reefs. The hotel is very clean and the staff is very friendly and welcoming. The equipment for snorkeling was also available by the hotel for free."',
    name: "Raza, UK"
  },
  {
    id: 2,
    quote:
      '"The hotel is situated very near to the tourist beach. The place is calm and clean with clear beach waters and reefs. The hotel is very clean and the staff is very friendly and welcoming. The equipment for snorkeling was also available by the hotel for free."',
    name: "Raza, UK"
  },
  {
    id: 3,
    quote:
      '"The hotel is situated very near to the tourist beach. The place is calm and clean with clear beach waters and reefs. The hotel is very clean and the staff is very friendly and welcoming. The equipment for snorkeling was also available by the hotel for free."',
    name: "Raza, UK"
  }
];

const carouselSettings = {
  arrows: false,
  autoplay: true,
  autoplaySpeed: 5000,
  dots: true,
  infinite: true,
  slidesToScroll: 1,
  slidesToShow: 1
};

const Testimonials = () => (
  <section className="testimonials">
    <div className="titled-box">
      <div className="titled-box__title">
        <span>
          <i className="fas fa-minus" /> THOUGHTS
        </span>
      </div>
      <div className="titled-box__content">
        <Slider {...carouselSettings}>
          {testimonials.map(test => (
            <div key={`testimonial-${test.id}`} className="testimonial">
              <blockquote className="testimonial__quote">
                {test.quote}
              </blockquote>
              <span className="testimonial__name">{test.name}</span>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  </section>
);

export default Testimonials;

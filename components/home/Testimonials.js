import Slider from "react-slick";
import "./testimonials.scss";

const testimonials = [
  {
    id: 0,
    quote:
      '"The hotel is situated very near to the tourist beach. The place is calm and clean with clear beach waters and reefs. The hotel is very clean and the staff is very friendly and welcoming. The equipment for snorkeling was also available by the hotel for free."',
    name: "Raza, UK"
  },
  {
    id: 1,
    quote:
      '"We stayed for 6 nights, and got a room on the second floor, with a beach view. The room was new, pristine clean, spacious, and has a nice style with touch on details - very high feel of standard. Afterwards we stayed on two other resorts in Maldives, but this room was the best."',
    name: "Kamil S, Czech Republic"
  },
  {
    id: 2,
    quote:
      '"All was more than excellent to me. The room has all the comfort I needed, the guest house is just in front of the beach. Staff (housekeeping and restaurant) very kind and helpful make you feel very relaxed. Ukulhas is a piece of paradise; no dirt, no noise, no bad things; only good things and this is what West Sands, Musab, and the team transmit to all guests"',
    name: "Alexandra , Portugal"
  },
  {
    id: 3,
    quote:
      '"We took the deluxe room with sea view and it was amazing! Big room, excellent bed, spacious and comfy. Bathroom had shower and bathtub... Heaven! The staff guys are super nice, food was excellent and location is perfect! Just a few meters from the beach. Perfect place! One of the best I ever travelled to. Maybe and I say just maybe.. I would have loved more fruit in the morning... But it\'s just my thought because I am vegan and love fruits!"',
    name: "Elena , Italy"
  }
];

const carouselSettings = {
  arrows: false,
  autoplay: true,
  autoplaySpeed: 10000,
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

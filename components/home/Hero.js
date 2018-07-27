import "./hero.scss";

class Hero extends React.Component {
  state = {
    loading: true
  };

  componentDidMount() {
    this.setState(() => ({ loading: false }));
  }

  render() {
    const { loading } = this.state;

    return (
      <section className="section-hero">
        <div className={`hero-img${loading ? "--loading" : ""}`} />
        <div className={`hero-overlay`}>
          <div className="container--wide">
            <div className="hero-text">
              <h2 className={`hero-text__h2${loading ? "--loading" : ""}`}>
                PARADISE FOUND
              </h2>
              <p className={`hero-text__p${loading ? "--loading" : ""}`}>
                We discovered paradise on the island of Ukulhas! Fortunately, it
                happened to be our backyard. Welcome to West Sands for a
                distinctly different local island holiday experience in
                Maldives. Soak up the sun, beach and the azure blue waters of
                the Indian Ocean.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Hero;

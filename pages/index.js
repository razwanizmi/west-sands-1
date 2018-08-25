import Activities from "../components/home/Activities";
import BestDeals from "../components/home/BestDeals";
import Footer from "../components/shared/Footer";
import Hero from "../components/home/Hero";
import Hotel from "../components/home/Hotel";
import Island from "../components/home/Island";
import Layout from "../components/shared/Layout";
import Navbar from "../components/shared/Navbar";
import Testimonials from "../components/home/Testimonials";

const Index = () => (
  <Layout>
    <Navbar />
    <Hero />
    <BestDeals />
    <Hotel />
    <div style={{ backgroundColor: "white" }}>
      <div className="container--right">
        <div
          style={{ height: "4px", width: "80px", backgroundColor: "#95ABBF" }}
        />
      </div>
    </div>
    <Activities />
    <Island />
    <Testimonials />
    <Footer />
  </Layout>
);

export default Index;

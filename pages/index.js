import Activities from "../components/home/Activities";
import BestDeals from "../components/home/BestDeals";
import Hero from "../components/home/Hero";
import Hotel from "../components/home/Hotel";
import Island from "../components/home/Island";
import Layout from "../components/shared/Layout";
import Testimonials from "../components/home/Testimonials";

const Index = () => (
  <Layout>
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
  </Layout>
);

export default Index;

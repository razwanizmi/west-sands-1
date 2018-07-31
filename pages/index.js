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
    <Activities />
    <Island />
    <Testimonials />
  </Layout>
);

export default Index;

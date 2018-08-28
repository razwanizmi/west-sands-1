import Activities from "../components/home/Activities";
import BestDeals from "../components/home/BestDeals";
import Footer from "../components/shared/Footer";
import Hero from "../components/home/Hero";
import Hotel from "../components/home/Hotel";
import Island from "../components/home/Island";
import Layout from "../components/shared/Layout";
import Navbar from "../components/shared/Navbar";
import Separator from "../components/shared/Separator";
import Testimonials from "../components/home/Testimonials";

const Index = () => (
  <Layout>
    <Navbar />
    <Hero />
    <BestDeals />
    <Hotel />
    <Separator />
    <Activities />
    <Island />
    <Testimonials />
    <Footer />
  </Layout>
);

export default Index;

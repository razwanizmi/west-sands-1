import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./layout.scss";

const Layout = ({ children }) => (
  <div>
    <Head>
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <title>West Sands at Ukulhas</title>
      <meta name="description" content="We discovered paradise on the island of Ukulhas! Fortunately, it happened to be our backyard. Welcome to West Sands for a distinctly different local island holiday experience in Maldives. Soak up the sun, beach and the azure blue waters of the Indian Ocean." />
      <meta name="keywords" content="" />
      <meta name="author" content="Razwan Rashidi" />
      <meta name="robots" content="index, follow" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <link rel="stylesheet" href="static/css/bootstrap.min.css" />
      <link rel="stylesheet" href="static/css/fontawesome.min.css" />
      <link rel="stylesheet" href="static/css/slick/slick.min.css" />
      <link rel="stylesheet" href="static/css/slick/slick-theme.min.css" />
      <meta property="fb:page_id" content="" />
      <meta property="og:title" content="West Sands at Ukulhas" />
      <meta property="og:image" content="https://razwanizmi.github.io/static/images/banner.png" />
      <meta property="og:description" content="We discovered paradise on the island of Ukulhas! Fortunately, it happened to be our backyard. Welcome to West Sands for a distinctly different local island holiday experience in Maldives. Soak up the sun, beach and the azure blue waters of the Indian Ocean." />
      <meta property="og:url" content="https://razwanizmi.github.io" />
      <meta property="og:site_name" content="West Sands at Ukulhas" />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:url" content="https://razwanizmi.github.io" />
      <meta name="twitter:title" content="West Sands at Ukulhas" />
      <meta name="twitter:description" content="We discovered paradise on the island of Ukulhas! Fortunately, it happened to be our backyard. Welcome to West Sands for a distinctly different local island holiday experience in Maldives. Soak up the sun, beach and the azure blue waters of the Indian Ocean." />
      <meta name="twitter:image" content="https://razwanizmi.github.io/static/images/banner.png" />
      <meta name="twitter:site" content="https://razwanizmi.github.io" />
    </Head>
    <Navbar />
    {children}
    <Footer />
  </div>
);

export default Layout;

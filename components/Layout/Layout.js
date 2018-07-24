import Head from "next/head";
import "./styles.scss";

const Layout = ({ children }) => (
  <div>
    <Head>
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <title>West Sands at Ukulhas</title>
      <meta name="description" content="" />
      <meta name="keywords" content="" />
      <meta name="author" content="" />
      <meta name="robots" content="index, follow" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <link rel="stylesheet" href="static/css/bootstrap.min.css" />
      <link rel="stylesheet" href="static/css/fontawesome.min.css" />
      <meta property="fb:page_id" content="" />
      <meta property="og:title" content="" />
      <meta property="og:image" content="" />
      <meta property="og:description" content="" />
      <meta property="og:url" content="" />
      <meta property="og:site_name" content="" />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:url" content="" />
      <meta name="twitter:title" content="" />
      <meta name="twitter:description" content="" />
      <meta name="twitter:image" content="" />
      <meta name="twitter:site" content="" />
    </Head>
    {children}
  </div>
);

export default Layout;

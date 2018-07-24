import Head from "next/head";

const Layout = ({ children }) => (
  <div>
    <Head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <title>West Sands at Ukulhas</title>
    </Head>
    {children}
  </div>
);

export default Layout;

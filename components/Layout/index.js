import Head from "next/head";
export const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <link rel="manifest" href="manifest/manifest.json" />
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/manifest/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/manifest/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/manifest/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/manifest/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/manifest/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/manifest/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/manifest/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/manifest/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/manifest/apple-icon-180x180.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="512x512"
          href="/manifest/apple-icon-512x512.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="512x512"
          href="manifest/favicon-512x512.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/manifest/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/manifest/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="manifest/favicon-96x96.png"
        />

        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="manifest/favicon-16x16.png"
        />
        <meta name="msapplication-TileColor" content="#000" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta
          name="description"
          content="Portafolio Desarollador Full Stack Javascript Wilson Herney Castro Cabrera"
        />
        <meta name="theme-color" content="#000"></meta>
      </Head>
      {children}
      <style jsx global>
        {`
          * {
            scroll-behavior: smooth;
            box-sizing: border-box;
            margin: 0;
            padding: 0;
            font-family: Arial, Helvetica, sans-serif;
          }
        `}
      </style>
    </div>
  );
};

import { Html, Main, NextScript, Head } from "next/document";
import Header from "../components/Header";

export default function Document() {
  return (
    <Html className="font-nunito">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter&display=optional"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito&family=Playfair+Display&display=swap"
          rel="stylesheet"
        />

        {/* GTM snippet */}
        {/* <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag() {
                window.dataLayer.push(arguments);
              }
              gtag('js', new Date());
              gtag('config', 'G-ZZRSF3BWDH');
            `,
            }}
          /> */}
      </Head>
      <body className="">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

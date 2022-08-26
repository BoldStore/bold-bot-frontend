import Document, { Html, Head, Main, NextScript } from "next/document";

class BoldBot extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta name="application-name" content="BOLDbot" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />
          <meta name="apple-mobile-web-app-title" content="BOLDbot" />
          <meta name="format-detection" content="telephone=no" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta
            name="msapplication-config"
            content="/icons/browserconfig.xml"
          />
          <meta name="msapplication-TileColor" content="#0083EA" />
          <meta name="msapplication-tap-highlight" content="no" />
          <meta name="theme-color" content="#FFFFFF" />

          <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
          <link
            rel="apple-touch-icon"
            sizes="152x152"
            href="/apple-touch-icon.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="167x167"
            href="/apple-touch-icon.png"
          />
          <link rel="manifest" href="/manifest.json" />
          <link rel="mask-icon" href="/icons/maskable.png" color="#5bbad5" />
          <link rel="shortcut icon" href="/favicon.ico" />

          <link
            rel="apple-touch-startup-image"
            href="/icons/icon-512x512.png"
            sizes="2048x2732"
          />
          <link
            rel="apple-touch-startup-image"
            href="/icons/icon-512x512.png"
            sizes="1668x2224"
          />
          <link
            rel="apple-touch-startup-image"
            href="/icons/icon-512x512.png"
            sizes="1536x2048"
          />
          <link
            rel="apple-touch-startup-image"
            href="/icons/icon-512x512.png"
            sizes="1125x2436"
          />
          <link
            rel="apple-touch-startup-image"
            href="/icons/icon-512x512.png"
            sizes="1242x2208"
          />
          <link
            rel="apple-touch-startup-image"
            href="/icons/icon-512x512.png"
            sizes="750x1334"
          />
          <link
            rel="apple-touch-startup-image"
            href="/icons/icon-512x512.png"
            sizes="640x1136"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default BoldBot;

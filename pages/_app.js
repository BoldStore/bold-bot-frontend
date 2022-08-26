import "../styles/globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { wrapper } from "../store/configureStore";
import { useEffect } from "react";
import { auth } from "../firebaseConfig";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../store/actions/user";
import "../styles/App.scss";
import Script from "next/script";
import SEO from "../components/SEO";
import RouteGuard from "../components/RouteGuard";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.user);

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        if (!userState.isLoading) dispatch(getUser());
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta
          name="description"
          content="BOLDbot is the next step in automating customer service for Instagram
          businesses. It levels up the professionalism of your business by
          increasing efficacy and simplifying interaction with your consumer."
        />
        <meta name="theme-color" content="#3781e3" />
        <title>BOLDbot</title>
        <link rel="manifest" href="/manifest.json" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-icon.png"></link>
      </Head>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />
      <Script strategy="lazyOnload" id="google-analytics">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
        page_path: window.location.pathname,
        });
    `}
      </Script>
      <SEO />
      <RouteGuard>
        <Component {...pageProps} />
      </RouteGuard>
      <ToastContainer autoClose={false} />
    </>
  );
}

export default wrapper.withRedux(MyApp);

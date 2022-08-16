import "../styles/globals.css";
import Head from "next/head";
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
import { GOOGLE_ANALYTICS_ID } from "../constants";

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
      <SEO />
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ANALYTICS_ID}`}
      />
      <Script strategy="lazyOnload" id="google-analytics-script">
        {`window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', ${GOOGLE_ANALYTICS_ID}), {
          page_path: window.location.pathname,
        });`}
      </Script>
      <Component {...pageProps} />
      <ToastContainer autoClose={false} />
    </>
  );
}

export default wrapper.withRedux(MyApp);

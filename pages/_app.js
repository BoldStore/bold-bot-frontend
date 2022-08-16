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
      <Component {...pageProps} />
      <ToastContainer autoClose={false} />
      {/* <!-- Google tag (gtag.js) --> */}
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-1ZBB6TQ926"
      />
      <Script strategy="lazyOnload" id="google-analytics-script">
        {`window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-1ZBB6TQ926'), {
          page_path: window.location.pathname,
        });`}
      </Script>
      <SEO />
    </>
  );
}

export default wrapper.withRedux(MyApp);

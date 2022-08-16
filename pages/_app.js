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
      <Component {...pageProps} />
      <ToastContainer autoClose={false} />
    </>
  );
}

export default wrapper.withRedux(MyApp);

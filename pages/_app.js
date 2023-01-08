import '../styles/globals.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { wrapper } from '../store/configureStore';
import { useEffect } from 'react';
import { auth } from '../firebaseConfig';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../store/actions/user';
import '../styles/App.scss';
import Script from 'next/script';
import SEO from '../components/SEO';
import RouteGuard from '../components/RouteGuard';
import Head from 'next/head';

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
        <meta
          name='viewport'
          content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover'
        />
      </Head>
      <Script
        strategy='lazyOnload'
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />
      <Script strategy='lazyOnload' id='google-analytics'>
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
      {/* <RouteGuard> */}
      <Component {...pageProps} />
      {/* </RouteGuard> */}
      <ToastContainer autoClose={1000} />
    </>
  );
}

export default wrapper.withRedux(MyApp);

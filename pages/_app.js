import "../styles/globals.css";
import Head from "next/head";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { wrapper } from "../store/configureStore";
import { useEffect } from "react";
import { auth } from "../firebaseConfig";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../store/actions/user";

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
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        ></meta>
      </Head>
    </>
  );
}

export default wrapper.withRedux(MyApp);

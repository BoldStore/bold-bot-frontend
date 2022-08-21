/* eslint-disable react-hooks/exhaustive-deps */
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPage } from "../store/actions/page";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebaseConfig";

function FacebookPage() {
  const { query, replace, asPath } = useRouter();
  const dispatch = useDispatch();
  const page = useSelector((state) => state.page);
  const [user, loading] = useAuthState(auth);

  const handleAddPage = () => {
    const access_token = query.access_token;
    const data_access_expiration_time = query.data_access_expiration_time;
    const expires_in = query.expires_in;
    const long_lived_token = query.long_lived_token;

    dispatch(
      addPage(
        access_token,
        data_access_expiration_time,
        expires_in,
        long_lived_token
      )
    );
  };

  useEffect(() => {
    if (page?.success) {
      replace("/dashboard");
    }
  }, [page]);

  useEffect(() => {
    if (query && user) {
      handleAddPage();
    }

    if (asPath.includes("#")) {
      const url = asPath.replace("#", "?");
      replace(url);
    }
  }, [query, user]);

  return <div>{loading ? "Loading..." : user?.accessToken}</div>;
}

export default FacebookPage;

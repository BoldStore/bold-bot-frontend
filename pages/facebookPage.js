/* eslint-disable react-hooks/exhaustive-deps */
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPage } from "../store/actions/page";

function FacebookPage() {
  const { query, replace } = useRouter();
  const dispatch = useDispatch();
  const page = useSelector((state) => state.page);

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
    if (page.success) {
      replace("/dashboard");
    }
  }, [page]);

  useEffect(() => {
    if (query) {
      handleAddPage();
    }
  }, [query]);

  return <div></div>;
}

export default FacebookPage;

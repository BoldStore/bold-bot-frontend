/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import styles from "./styles.module.css";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import { useSignInWithFacebook } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import { auth } from "../../firebaseConfig";
import { useRouter } from "next/router";
import {
  CLIENT_ID,
  FACEBOOK_AUTH_URL,
  REDIRECT_URI,
  SCOPE,
} from "../../constants";
import { useDispatch } from "react-redux";
import { createUser } from "../../store/actions/user";

function FacebookButton() {
  const router = useRouter();
  const dispatch = useDispatch();
  const [signInWithFacebook, user, loading, error] =
    useSignInWithFacebook(auth);

  useEffect(() => {
    if (user) {
      success();
    }
  }, [user]);

  const success = async () => {
    toast.success("Successfully Signed In", {
      autoClose: 3000,
    });

    dispatch(createUser());
    const url = `${FACEBOOK_AUTH_URL}?response_type=token&display=popup&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${SCOPE}`;
    router.replace(url);
    getToken();
  };

  const getToken = async () => {
    await auth.currentUser.getIdToken(true).then((token) => {
      console.log("TOKEN>>>>", token);
    });
  };

  useEffect(() => {
    if (error) toast(error);
  }, [error]);

  return (
    <button
      className={styles.button}
      onClick={(e) => {
        if (loading) return;
        if (user) return;
        e.preventDefault();
        signInWithFacebook();
      }}
    >
      <FacebookRoundedIcon
        sx={{ color: "var(--white)" }}
        className={styles.icon}
      />
      <p>{loading ? "Loading..." : "Continue With Facebook"}</p>
    </button>
  );
}

export default FacebookButton;

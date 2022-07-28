import React, { useEffect } from "react";
import styles from "./styles.module.css";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import { useSignInWithFacebook } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import { auth } from "../../firebaseConfig";
import { useRouter } from "next/router";
import { FACEBOOK_GRAPH_URL } from "../../constants";

function FacebookButton() {
  const router = useRouter();
  const [signInWithFacebook, user, loading, error] =
    useSignInWithFacebook(auth);

  useEffect(() => {
    if (user) {
      toast.success("Successfully Signed In", {
        autoClose: 3000,
      });
      const accessToken = user?._tokenResponse?.oauthAccessToken;
      const url = `${FACEBOOK_GRAPH_URL}/${user?.user?.providerData[0]?.uid}//accounts?fields=name,access_token&access_token=${accessToken}`;
      router.replace(url);
    }
  }, [router, user]);

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

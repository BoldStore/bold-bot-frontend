import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebaseConfig";

export default function RouteGuard({ children }) {
  const [user, loading] = useAuthState(auth);
  const router = useRouter();
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    if (loading) {
      return;
    }
    // on initial load - run auth check
    authCheck(router.asPath);

    // on route change start - hide page content by setting authorized to false
    const hideContent = () => setAuthorized(false);
    router.events.on("routeChangeStart", hideContent);

    // on route change complete - run auth check
    router.events.on("routeChangeComplete", authCheck);

    // unsubscribe from events in useEffect return function
    return () => {
      router.events.off("routeChangeStart", hideContent);
      router.events.off("routeChangeComplete", authCheck);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, router, loading]);

  function authCheck(url) {
    // redirect to login page if accessing a private page and not logged in
    const path = url?.split("?")[0] ?? "";

    const publicPaths = [
      "/",
      "/terms-and-conditions",
      "/getting-started",
      "/#OurPlans",
      "/#OurFeatures",
      "/#ContactUs",
      "/dashboard",
      "/dashboard/greetings",
      "/dashboard/profile",
      "/404",
      "/500",
      "/privacy-policy",
    ];

    if (!user && !publicPaths.includes(path ?? "")) {
      setAuthorized(false);
      router.push({
        pathname: "/",
        query: { returnUrl: router.asPath },
      });
    } else {
      setAuthorized(true);
    }
  }

  return authorized && children;
}

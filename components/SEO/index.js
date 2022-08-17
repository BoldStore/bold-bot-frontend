import React from "react";
import { WEB_URL } from "../../constants";
import { NextSeo } from "next-seo";

function SEO({ title, desc }) {
  return (
    <NextSeo
      title={title}
      defaultTitle="BOLDbot"
      description={
        desc ??
        "BOLDbot is the next step in automating customer service for Instagram businesses. It levels up the professionalism of your business by increasing efficacy and simplifying interaction with your consumer."
      }
      keywords={"Instagram, "}
      canonical={`${WEB_URL}`}
      twitter={{
        title: "BOLDbot",
        site: WEB_URL,
        image: "/assets/Logo.svg",
        cardType: "https://i.ibb.co/bRmp6KC/BOLDbot.png",
        description:
          "BOLDbot is the next step in automating customer service for Instagram businesses. It levels up the professionalism of your business by increasing efficacy and simplifying interaction with your consumer.",
      }}
      image="/assets/Logo.svg"
      additionalLinkTags={[
        {
          rel: "icon",
          href: "/assets/Logo.svg",
        },
        {
          rel: "apple-touch-icon",
          href: "/assets/Logo.svg",
          sizes: "76x76",
        },
      ]}
    />
  );
}

export default SEO;

import React from "react";
import { WEB_URL } from "../../constants";
import { NextSeo } from "next-seo";

function SEO({ title, desc }) {
  const description =
    "BOLDbot is the next step in automating customer service for Instagram businesses. It levels up the professionalism of your business by increasing efficacy and simplifying interaction with your consumer";
  const logoSrc = "https://i.ibb.co/bRmp6KC/BOLDbot.png";
  return (
    <NextSeo
      title={title}
      defaultTitle="BOLDbot"
      description={desc ?? description}
      keywords={"Instagram, "}
      canonical={`${WEB_URL}`}
      twitter={{
        title: "BOLDbot",
        site: WEB_URL,
        image: "/assets/Logo.svg",
        cardType: logoSrc,
        description: description,
      }}
      image={"/assets/Logo.svg"}
      site={`${WEB_URL}`}
      additionalMetaTags={[
        {
          property: "og:title",
          content: "BOLDbot",
        },
        {
          property: "og:image",
          itemprop: "image",
          content: logoSrc,
        },
        {
          property: "og:description",
          content: "Automate your business, the bold way.",
        },
        {
          property: "og:site_name",
          content: "BOLDbot",
        },
        {
          itemprop: "thumbnailUrl",
          href: logoSrc,
        },
        {
          property: "og:type",
          content: "Automation Service",
        },
        {
          property: "og:url",
          content: WEB_URL,
        },
        {
          itemProp: "image",
          content: logoSrc,
        },
        {
          itemProp: "description",
          content: description,
        },
        {
          name: "msapplication-TileImage",
          content: logoSrc,
        },
      ]}
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

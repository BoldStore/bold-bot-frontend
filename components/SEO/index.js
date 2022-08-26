import React from "react";
import { WEB_URL } from "../../constants";
import { NextSeo } from "next-seo";

function SEO({ title, desc }) {
  const description =
    "BOLDbot is the next step in automating customer service for Instagram businesses. It levels up the professionalism of your business by increasing efficacy and simplifying interaction with your consumer";
  const logoSrc = "https://i.ibb.co/7Yyp9LV/Logo.png";
  return (
    <NextSeo
      title={title}
      defaultTitle="BOLDbot"
      description={desc ?? description}
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
          itemProp: "image",
          content: logoSrc,
        },
        {
          property: "og:description",
          content: description,
        },
        {
          property: "og:site_name",
          content: "BOLDbot",
        },
        {
          itemProp: "thumbnailUrl",
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
        {
          name: "viewport",
          content:
            "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no",
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

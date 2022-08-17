import React from "react";
import { WEB_URL } from "../../constants";
import { NextSeo } from "next-seo";

function SEO({ title, desc }) {
  const description =
    "BOLDbot is the next step in automating customer service for Instagram businesses. It levels up the professionalism of your business by increasing efficacy and simplifying interaction with your consumer";
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
        cardType: "https://i.ibb.co/bRmp6KC/BOLDbot.png",
        description: description,
      }}
      image={"/assets/Logo.svg"}
      site={`${WEB_URL}`}
      additionalMetaTags={[
        {
          property: "og:image",
          itemprop: "image",
          content: "https://i.ibb.co/bRmp6KC/BOLDbot.png",
        },
        {
          name: "msapplication-TileImage",
          content: "https://i.ibb.co/bRmp6KC/BOLDbot.png",
        },
        {
          property: "og:site_name",
          content: "BOLDbot",
        },
        {
          property: "og:image:width",
          content: "300",
        },
        {
          property: "og:image:height",
          content: "300",
        },
        {
          itemprop: "thumbnailUrl",
          href: "https://i.ibb.co/bRmp6KC/BOLDbot.png",
        },
        {
          property: "og:title",
          content: "BOLDbot",
        },
        {
          property: "og:url",
          content: WEB_URL,
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
          content: "https://i.ibb.co/bRmp6KC/BOLDbot.png",
        },
        {
          itemProp: "description",
          content: description,
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

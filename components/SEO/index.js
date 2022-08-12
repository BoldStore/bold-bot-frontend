import React from "react";
import Head from "next/head";

function SEO({ title, desc, imgSrc }) {
  return (
    <Head>
      <title>{title ?? "BOLDbot"}</title>
      <meta
        name="description"
        content={
          desc ??
          "BOLDbot is the next step in automating customer service for Instagram businesses. It’s personalised greetings and range of choices increases the ease with which your patrons can inquire or communicate with the store via direct messages. The persistent menu removes the miscommunication quotient by providing the option of starting over or redirecting to a new topic. BOLDbot levels up the professionalism of your business by increasing efficacy and simplifying interaction with your consumer. Automate your business, the bold way."
        }
      />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1"
      ></meta>
      <link rel="icon" href={imgSrc ?? "/assets/Logo.svg"} />
    </Head>
  );
}

export default SEO;

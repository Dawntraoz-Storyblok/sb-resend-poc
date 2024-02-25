import "../styles/globals.css";
import { storyblokInit, apiPlugin } from "@storyblok/react";

import EmailTemplate from "../components/EmailTemplate";
import Page from "../components/Page";

import Feature from "../components/Feature";
import Grid from "../components/Grid";
import Teaser from "../components/Teaser";

const components = {
  "email-template": EmailTemplate,
  feature: Feature,
  grid: Grid,
  teaser: Teaser,
  page: Page,
};

storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_API_TOKEN,
  use: [apiPlugin],
  components,
  apiOptions: {
    region: "",
  },
});

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;

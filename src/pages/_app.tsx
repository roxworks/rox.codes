import { type AppType } from "next/app";

import { trpc } from "../utils/trpc";
import { GoogleAnalytics } from "nextjs-google-analytics";
import { usePostHog } from "next-use-posthog";

import "../styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {

  usePostHog(process.env.NEXT_PUBLIC_POSTHOG_ID || '', {
    api_host: "https://app.posthog.com",
  });

  return <>
    <GoogleAnalytics trackPageViews />
    <Component {...pageProps} />
  </>;
};

export default trpc.withTRPC(MyApp);

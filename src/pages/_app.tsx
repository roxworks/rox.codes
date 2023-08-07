import { type AppType } from "next/app";

import { trpc } from "../utils/trpc";
import { GoogleAnalytics } from "nextjs-google-analytics";
import { usePostHog } from "next-use-posthog";

import "../styles/globals.css";
import Head from "next/head";
import Script from "next/script";

const MyApp: AppType = ({ Component, pageProps }) => {

  usePostHog(process.env.NEXT_PUBLIC_POSTHOG_ID || '', {
    api_host: "https://app.posthog.com",
  });
  /**
   * <script>
    var script = document.createElement("script");
    script.src = "https://app.krunchdata.io/assets/js/k2.js";
    script.dataset.api = "https://api.krunchdata.io/traffic/web/record";
    script.dataset.id = "ivY21exnYiiPhw3BSpdd4jbUp6AGiZx7a0xH6Cmo2lS3po4DKvfvduV2FotbzV9M";
    script.defer = true;
    script.type = "module";
  
    document.head.appendChild(script);
    console.log("Krunch script installed");
  </script>
   */

  return <>
    <script>
      var script = document.createElement("script");
      script.src = "https://app.krunchdata.io/assets/js/k2.js";
      script.dataset.api = "https://api.krunchdata.io/traffic/web/record";
      script.dataset.id = "VVQmI5b3tzqkIee4pzhoyG5gXFHnbnmFAjjaV1flsqyTAIw91uf1g1i7YN1VkHpB";
      script.defer = true;
      script.type = "module";

      document.head.appendChild(script);
      console.log("Krunch script installed");
    </script>
    <GoogleAnalytics trackPageViews />
    <Component {...pageProps} />
  </>;
};

export default trpc.withTRPC(MyApp);

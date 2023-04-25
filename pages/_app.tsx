import "../global.css";

//
import type { AppProps } from "next/app";

// config
import fonts from "@config/fonts";

// Components
import Head from "@components/Meta.Head";
import AnalyticsWrapper from "@components/Meta.Analytics";
import Layout from "@components/Layout";
import Progress from "@components/Layout.Progress";

//
export default function MyApp({ Component, pageProps }: AppProps) {
  const Wrapper = (Component as any).Layout || Layout;

  return (
    <>
      <Head>
        <style>{fonts}</style>
      </Head>
      <Wrapper pageProps={pageProps}>
        <Component {...pageProps} />
        <AnalyticsWrapper />
        <Progress />
      </Wrapper>
    </>
  );
}

import type { FC, ReactNode } from "react";
import NextHead from "next/head";
import { DefaultSeo } from "next-seo";

// config
import config from "@config/metadata";

// types
interface Props {
  children?: ReactNode;
}

// exported component
const Head: FC<Props> = ({ children }) => {
  return (
    <>
      {/* Pushing basic header information, e.g. sharing icons + fonts */}
      <NextHead>
        <meta
          key="viewport"
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000000" />
        <meta name="msapplication-TileColor" content="#00aba9" />
        <meta name="theme-color" content="#ffffff" />

        {children}
      </NextHead>

      {/* Base SEO for site */}
      <DefaultSeo {...config} />
    </>
  );
};

export default Head;

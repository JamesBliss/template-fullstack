import "./global.css";
import { ReactNode } from "react";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";

// config
import fonts from "@config/fonts";
import siteMetadata from "@config/metadata";

// components
import Header from "@components/Layout.Header";
import Footer from "@components/Layout.Footer";
import Progress from "@components/Layout.Progress";

export const metadata: Metadata = siteMetadata;

//
const Layout = ({ children }: { children?: ReactNode }) => (
  <html lang="en" className={fonts}>
    <body>
      <div className="min-h-dvh grid grid-rows-[auto_1fr_auto]">
        <Header />
        {children}
        <Footer />
        <Analytics />
        <Progress />
      </div>
    </body>
  </html>
);
export default Layout;

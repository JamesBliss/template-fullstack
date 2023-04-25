import type { NextPage } from "next";
import Head from "next/head";

// Components
import Faces from "@components/Display.Faces";
import { NextSeo } from "next-seo";

// Component
const HomePage: NextPage = () => {
  return (
    <>
      <Head>
        <style>
          {`
            :root {
              --primary: 0,0,0;
              --secondary: 255,255,255;
            }
          `}
        </style>
      </Head>

      <main className="bg-secondary py-40">
        <div className="relative mx-auto mt-5 max-w-sm">
          <div className="aspect-1">
            <Faces emotion="happy" />
          </div>
        </div>
      </main>
    </>
  );
};

export default HomePage;

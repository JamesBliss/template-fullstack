import type { NextPage } from "next";

// Components
import Faces from "@components/Display.Faces";

// Component
const HomePage: NextPage = () => {
  return (
    <>
      <style>
        {`
            :root {
              --primary: 0,0,0;
              --secondary: 255,255,255;
            }
          `}
      </style>

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

import clsx from "clsx";
import { Inter, Noto_Serif } from "next/font/google";

/* ===== */
/* INTER */
/* ===== */
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

/* ===== */
/* INTER */
/* ===== */
const noto = Noto_Serif({
  subsets: ["latin"],
  variable: "--font-noto",
  weight: ["400", "700"],
});

//
const fonts = clsx(inter.className, noto.className);

export default fonts;

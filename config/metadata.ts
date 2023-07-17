const metadata = {
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_URL}`),

  // https://beta.nextjs.org/docs/api-reference/metadata#metadata-fields
  title: {
    default: "Title",
    template: "%s | Website",
  },
  description: "Description | Website",
  url: process.env.NEXT_PUBLIC_URL,

  //  https://beta.nextjs.org/docs/api-reference/metadata#twitter
  twitter: {
    handle: "@",
    site: "@",
    cardType: "summary_large_image",
  },

  // https://beta.nextjs.org/docs/api-reference/metadata#opengraph
  openGraph: {
    title: "Title",
    description: "Description",
    type: "website",
    url: process.env.NEXT_PUBLIC_URL,
    siteName: "Site name",
    locale: "en",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_URL}/api/og`,
        width: 1200,
        height: 675,
      },
    ],
  },

  // https://beta.nextjs.org/docs/api-reference/metadata#viewport
  viewport: {
    width: "device-width",
    initialScale: 1,
  },

  // https://beta.nextjs.org/docs/api-reference/metadata#robots
  robots: {
    index: false,
    follow: true,
    nocache: true,
  },

  // https://beta.nextjs.org/docs/api-reference/metadata#icons
  icons: {
    icon: "./favicon-16x16.png",
    shortcut: "./favicon-32x32.png",
    apple: "./apple-touch-icon.png",
  },

  // https://beta.nextjs.org/docs/api-reference/metadata#manifest
  manifest: "./site.webmanifest",

  // https://beta.nextjs.org/docs/api-reference/metadata#themecolor
  themeColor: "white",
};

export default metadata;

const metadata = {
  // https://beta.nextjs.org/docs/api-reference/metadata#metadata-fields
  title: {
    default: "Title",
    template: "%s | Website",
  },
  description: "Description | Website",

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
    url: "http://localhost:3000",
    siteName: "Site name",
    locale: "en",
    images: [
      {
        url: "https://localhost:3000/og/og.jpg",
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

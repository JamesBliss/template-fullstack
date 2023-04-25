const metadata = {
  title: "Title",
  titleTemplate: "%s | Website",
  description: "Description | Website",
  dangerouslySetAllPagesToNoIndex: true,
  dangerouslySetAllPagesToNoFollow: true,
  twitter: {
    handle: "@",
    site: "@",
    cardType: "summary_large_image",
  },
  openGraph: {
    title: "Title",
    description: "Description",
    type: "website",
    url: "http://localhost:3000",
    site_name: "Site name",
    locale: "en",
    images: [
      {
        url: "https://localhost:3000/og/og.jpg",
        width: 1200,
        height: 675,
        alt: "Title | Website",
      },
    ],
  },
};

export default metadata;

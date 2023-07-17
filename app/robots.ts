export default function robots() {
  const url = process.env.NEXT_PUBLIC_URL;

  return {
    rules: [
      {
        userAgent: "*",
      },
    ],
    sitemap: `${url}/sitemap.xml`,
    host: url,
  };
}

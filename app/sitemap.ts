export default async function sitemap() {
  const url = process.env.NEXT_PUBLIC_URL;

  const routes = [""].map((route) => ({
    url: `${url}/${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes];
}

export default async function sitemap() {
  const routes = [""].map((route) => ({
    url: `http://localhost:3000${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes];
}

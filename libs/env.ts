import getConfig from "next/config";

const { serverRuntimeConfig, publicRuntimeConfig } = getConfig();

// https://whitefield.dev/blog/nextjs-env-variables
// serverRuntimeConfig - Will only be available on the server side
// publicRuntimeConfig - Will be available on both server and client
export const getEnvVar = (key) =>
  serverRuntimeConfig[key] || publicRuntimeConfig[key];

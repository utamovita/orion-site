/** @type {import('next').NextConfig} */

import rewrites from "./next-config/rewrites.mjs";
import redirects from "./next-config/redirects.mjs";

import path from "path";
/** @type import("next").I18NConfig */
const i18n = {
  defaultLocale: "pl",
  locales: ["en", "de", "pl"],
};

const nextConfig = {
  i18n,
  async rewrites() {
    return rewrites;
  },

  async redirects() {
    return redirects;
  },
};

export default nextConfig;

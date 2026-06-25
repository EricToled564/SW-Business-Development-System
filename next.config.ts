import type { NextConfig } from "next";

// Para GitHub Pages: build estático con basePath del repo.
// Se activa con PAGES=true (el workflow lo setea); en dev/normal no afecta.
const isPages = process.env.PAGES === "true";
const repo = "/Final-Upgrade-Webpage";

const nextConfig: NextConfig = isPages
  ? {
      output: "export",
      basePath: repo,
      assetPrefix: repo,
      trailingSlash: true,
      images: { unoptimized: true },
    }
  : {
      images: { formats: ["image/avif", "image/webp"] },
    };

export default nextConfig;

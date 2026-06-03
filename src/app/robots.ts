// app/robots.ts
import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin/", "/api/", "/private/"],
    },
    sitemap: "https://aakashaautomations.com/sitemap.xml",
    host: "https://aakashaautomations.com",
  };
}
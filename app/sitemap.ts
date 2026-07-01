import type { MetadataRoute } from "next";
import { serviceLinks, site } from "@/constants/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/contact",
    "/book-consultation",
    "/privacy-policy",
    "/terms"
  ];

  return [...staticRoutes, ...serviceLinks.map((service) => service.href)].map((path) => ({
    url: `${site.url}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.7
  }));
}

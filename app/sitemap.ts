import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://tasyamalia.github.io",
      lastModified: new Date("2026-06-13"),
      changeFrequency: "monthly",
      priority: 1
    }
  ];
}

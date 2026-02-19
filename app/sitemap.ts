// app/sitemap.ts
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.gobijunior.pt";
  return [
    { url: `${base}/`, lastModified: new Date() },
    { url: `${base}/servicos`, lastModified: new Date() },
    { url: `${base}/obras`, lastModified: new Date() },
    { url: `${base}/sobre`, lastModified: new Date() },
    { url: `${base}/contactos`, lastModified: new Date() },
    { url: `${base}/trabalhe-connosco`, lastModified: new Date() },
  ];
}

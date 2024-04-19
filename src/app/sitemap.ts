import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://pirate-software.vercel.app/",
      lastModified: new Date(),
      changeFrequency: "always",
    },
    {
      url: "https://pirate-software.vercel.app/games/breakfast",
      lastModified: new Date(),
      changeFrequency: "always",
    },
    {
      url: "https://pirate-software.vercel.app/games/heartbound",
      lastModified: new Date(),
      changeFrequency: "always",
    },
    {
      url: "https://pirate-software.vercel.app/games/killthemoon",
      lastModified: new Date(),
      changeFrequency: "always",
    },
  ];
}

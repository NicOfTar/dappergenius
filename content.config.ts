import { defineCollection, defineContentConfig } from "@nuxt/content";

export default defineContentConfig({
  collections: {
    "books": defineCollection({
      source: "books/*.md",
      type: "page",
    }),
    "glossary": defineCollection({ source: "glossary/**/*.md", type: "page" }),
    "sci-fi": defineCollection({ source: "sci-fi/**/*.md", type: "page" }),
    "self-evolution": defineCollection({
      source: "self-evolution/**/*.md",
      type: "page",
    }),
    "short-stories": defineCollection({
      source: "short-stories/**/*.md",
      type: "page",
    }),
  },
});

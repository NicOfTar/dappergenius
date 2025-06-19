import { defineCollection, defineContentConfig } from "@nuxt/content";

export default defineContentConfig({
  collections: {
    "books": defineCollection({
      source: "books/*.md",
      type: "page",
    }),
    "glossary": defineCollection({ 
      source: "glossary/*.md", 
      type: "page" }),
    "sciFi": defineCollection({ 
      source: "sci-fi/*.md", 
      type: "page" }),
    "selfEvolution": defineCollection({
      source: "self-evolution/*.md",
      type: "page",
    }),
    "shortStories": defineCollection({
      source: "short-stories/*.md",
      type: "page",
    }),
    "content": defineCollection({
      source: "*.md",
      type: "page",
    }),
  },
});

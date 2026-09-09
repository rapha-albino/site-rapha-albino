import { readFile, readdir } from "node:fs/promises";
import { join } from "node:path";
import { marked } from "marked";

const directory = join(process.cwd(), "content", "blog");

export type Post = {
  title: string; slug: string; publishedAt: string; featuredImage?: string;
  featuredImageAlt?: string; body: string; html: string;
};

function value(source: string, key: string) {
  const match = source.match(new RegExp(`^${key}:\\s*"?(.*?)"?\\s*$`, "m"));
  return match?.[1];
}

export async function posts(): Promise<Post[]> {
  const names = (await readdir(directory)).filter((name) => name.endsWith(".md"));
  const entries = await Promise.all(names.map(async (name) => {
    const source = await readFile(join(directory, name), "utf8");
    const [, frontmatter = "", body = ""] = source.split(/^---\s*$/m);
    const title = value(frontmatter, "title") ?? name;
    return {
      title, slug: value(frontmatter, "slug") ?? name.replace(/\.md$/, ""),
      publishedAt: value(frontmatter, "publishedAt") ?? "",
      featuredImage: value(frontmatter, "featuredImage"),
      featuredImageAlt: value(frontmatter, "featuredImageAlt"),
      body, html: await marked.parse(body),
    };
  }));
  return entries.sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
}

export const displayDate = (date: string) => new Intl.DateTimeFormat("pt-BR", { dateStyle: "long" }).format(new Date(date));

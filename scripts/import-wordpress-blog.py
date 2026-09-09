#!/usr/bin/env python3
"""Create a lossless local migration snapshot of the current WordPress blog."""

from __future__ import annotations

import html
import json
import re
from html.parser import HTMLParser
from pathlib import Path
from urllib.request import Request, urlopen

from markdownify import markdownify

API = "https://rapha-albino.com.br/wp-json/wp/v2/posts"
ROOT = Path(__file__).resolve().parents[1]
CONTENT_DIR = ROOT / "content" / "blog"
RAW_EXPORT = ROOT / "content" / "wordpress-posts-export.json"
MEDIA_INVENTORY = ROOT / "content" / "wordpress-media-inventory.json"


class TextExtractor(HTMLParser):
    def __init__(self) -> None:
        super().__init__()
        self.parts: list[str] = []

    def handle_data(self, data: str) -> None:
        self.parts.append(data)


class ImageExtractor(HTMLParser):
    def __init__(self) -> None:
        super().__init__()
        self.images: list[tuple[str, str]] = []

    def handle_starttag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        if tag != "img":
            return
        attributes = dict(attrs)
        source = attributes.get("data-orig-src") or attributes.get("data-src") or attributes.get("src")
        if source and not source.startswith("data:"):
            self.images.append((source, attributes.get("alt") or ""))


def fetch_json(url: str) -> object:
    request = Request(url, headers={"User-Agent": "RaphaelAlbinoSiteMigration/1.0"})
    with urlopen(request, timeout=30) as response:
        return json.load(response)


def plain_text(value: str) -> str:
    parser = TextExtractor()
    parser.feed(value)
    return html.unescape("".join(parser.parts)).strip()


def quote(value: str) -> str:
    return json.dumps(value, ensure_ascii=False)


def normalize_lazy_images(rendered: str) -> str:
    def replace_image(match: object) -> str:
        tag = match.group(0)
        source = re.search(r'data-(?:orig-)?src="([^"]+)"', tag)
        if not source:
            return tag
        return re.sub(r'\bsrc="[^"]+"', f'src="{source.group(1)}"', tag, count=1)

    return re.sub(r"<img\b[^>]*>", replace_image, rendered, flags=re.IGNORECASE)


def main() -> None:
    posts = fetch_json(f"{API}?per_page=100&orderby=date&order=asc&_embed=1")
    if not isinstance(posts, list):
        raise RuntimeError("WordPress did not return a post list.")

    CONTENT_DIR.mkdir(parents=True, exist_ok=True)
    media: list[dict[str, str | int]] = []

    for post in posts:
        title = plain_text(post["title"]["rendered"])
        rendered = post["content"]["rendered"]
        normalized = normalize_lazy_images(rendered)
        body = markdownify(normalized, heading_style="ATX").strip()
        embedded_media = post.get("_embedded", {}).get("wp:featuredmedia", [])
        featured = embedded_media[0] if embedded_media else None
        featured_url = featured.get("source_url") if featured else None
        featured_alt = featured.get("alt_text") if featured else None

        frontmatter = [
            "---",
            f"title: {quote(title)}",
            f"publishedAt: {quote(post['date'])}",
            f"modifiedAt: {quote(post['modified'])}",
            f"slug: {quote(post['slug'])}",
            f"sourceUrl: {quote(post['link'])}",
            f"wordpressId: {post['id']}",
        ]
        if featured_url:
            frontmatter.append(f"featuredImage: {quote(featured_url)}")
        if featured_alt:
            frontmatter.append(f"featuredImageAlt: {quote(featured_alt)}")
        frontmatter.extend(["---", "", body, ""])
        (CONTENT_DIR / f"{post['slug']}.md").write_text("\n".join(frontmatter))

        if featured_url:
            media.append(
                {
                    "wordpressId": post["id"],
                    "slug": post["slug"],
                    "role": "featured",
                    "url": featured_url,
                    "alt": featured_alt or "",
                }
            )

        images = ImageExtractor()
        images.feed(normalized)
        for source, alt in images.images:
            media.append(
                {
                    "wordpressId": post["id"],
                    "slug": post["slug"],
                    "role": "inline",
                    "url": source,
                    "alt": alt,
                }
            )

    RAW_EXPORT.write_text(json.dumps(posts, ensure_ascii=False, indent=2) + "\n")
    MEDIA_INVENTORY.write_text(json.dumps(media, ensure_ascii=False, indent=2) + "\n")
    print(f"Imported {len(posts)} posts into {CONTENT_DIR}")
    print(f"Recorded {len(media)} featured images in {MEDIA_INVENTORY}")


if __name__ == "__main__":
    main()

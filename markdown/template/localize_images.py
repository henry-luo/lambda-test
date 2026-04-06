#!/usr/bin/env python3
"""
localize_images.py
------------------
For each *.md in MARKDOWN_DIR:
  1. Find external image URLs (skip pure badge CDNs).
  2. Convert GitHub blob URLs to raw.githubusercontent.com equivalents.
  3. Download each unique image to IMAGES_DIR.
  4. Rewrite the .md source to use the relative path from the HTML output location.

Run from anywhere; all paths are resolved relative to this script's location.
"""

import os
import re
import sys
import hashlib
import urllib.request
import urllib.error
from pathlib import Path
from urllib.parse import urlparse

# ── Paths ──────────────────────────────────────────────────────────────────
SCRIPT_DIR   = Path(__file__).parent.resolve()
MARKDOWN_DIR = SCRIPT_DIR.parent          # markdown/*.md
IMAGES_DIR   = SCRIPT_DIR.parent.parent / "layout" / "data" / "support" / "images"
# Relative path used inside HTML (output is layout/data/markdown/*.html)
IMG_REL_PATH = "../support/images"

# ── Badge-domain skip list ─────────────────────────────────────────────────
BADGE_DOMAINS = re.compile(
    r'shields\.io|badgesize\.io|badge\.fury|img\.shields|badgen\.net'
    r'|snyk\.io|david-dm\.org|bundlephobia|packagephobia'
    r'|api\.securityscorecards|coveralls\.io|saucelabs\.com'
    r'|deepwiki\.com|packagequality\.com|badges\.gitter\.im'
    r'|codetriage\.com'
)

# GitHub blob URL pattern → convert to raw
BLOB_RE = re.compile(
    r'https://github\.com/([^/]+/[^/]+)/blob/([^/]+)/(.+?)(?=[\s"\')\]]|$)'
)

def to_raw_url(url: str) -> str:
    """Convert GitHub blob page URLs to raw.githubusercontent.com."""
    m = BLOB_RE.match(url)
    if m:
        repo, branch, path = m.group(1), m.group(2), m.group(3)
        return f"https://raw.githubusercontent.com/{repo}/{branch}/{path}"
    return url

def sanitize_filename(url: str) -> str:
    """Derive a safe, unique filename from a URL."""
    parsed = urlparse(url)
    # Start from URL path basename
    name = Path(parsed.path).name
    # Strip query strings that may have ended up in the name
    name = re.sub(r'[?#&=].*', '', name)
    # If name is empty or non-descriptive, use a hash prefix
    if not name or name in ('', '.'):
        name = hashlib.md5(url.encode()).hexdigest()[:8] + '.bin'
    # Prepend a short domain slug to avoid collisions across sites
    domain_slug = (parsed.netloc
                   .replace('raw.githubusercontent.com', 'gh')
                   .replace('www.', '')
                   .replace('.com', '')
                   .replace('.org', '')
                   .replace('.io', '')
                   .replace('.', '-')[:20])
    candidate = f"{domain_slug}_{name}"
    # Replace any remaining unsafe characters
    candidate = re.sub(r'[^\w.\-]', '_', candidate)
    return candidate

def find_image_urls(text: str):
    """Return all external image URLs found in markdown text."""
    # Markdown: ![alt](URL) or ![alt](URL "title")
    md_imgs = re.findall(r'!\[[^\]]*\]\((https?://[^\s)"\']+)', text)
    # HTML <img src="URL"> or <img src='URL'>
    html_imgs = re.findall(r'<img[^>]+src=["\']?(https?://[^\s"\'>/][^\s"\']*)', text)
    # HTML <source srcset="URL"> (used in <picture>)
    srcset_imgs = re.findall(r'<source[^>]+srcset=["\']?(https?://[^\s"\']+)', text)
    # All unique, preserving order
    seen = set()
    result = []
    for url in md_imgs + html_imgs + srcset_imgs:
        # Must end with an image extension (allow query strings)
        base = url.split('?')[0].split('#')[0]
        if not re.search(r'\.(png|jpg|jpeg|gif|svg|webp|ico)$', base, re.I):
            continue
        if url not in seen:
            seen.add(url)
            result.append(url)
    return result

def download_image(url: str, dest: Path) -> bool:
    """Download url to dest. Return True on success."""
    if dest.exists():
        return True  # already downloaded
    try:
        req = urllib.request.Request(url, headers={"User-Agent": "curl/7.79.1"})
        with urllib.request.urlopen(req, timeout=20) as resp, open(dest, 'wb') as f:
            f.write(resp.read())
        return True
    except Exception as e:
        print(f"  WARN: failed to download {url}: {e}", file=sys.stderr)
        if dest.exists():
            dest.unlink()
        return False

def process_file(md_path: Path, images_dir: Path) -> int:
    """Process one markdown file. Returns number of images replaced."""
    text = md_path.read_text(encoding='utf-8')
    urls = find_image_urls(text)
    if not urls:
        return 0

    replacements = {}  # original_url -> local_rel_path
    for url in urls:
        if BADGE_DOMAINS.search(url):
            continue
        raw_url = to_raw_url(url)
        filename = sanitize_filename(raw_url)
        dest = images_dir / filename
        print(f"  {'↓' if not dest.exists() else '✓'} {filename}")
        print(f"    from: {raw_url}")
        if download_image(raw_url, dest):
            replacements[url] = f"{IMG_REL_PATH}/{filename}"
            if raw_url != url:
                replacements[raw_url] = f"{IMG_REL_PATH}/{filename}"

    if not replacements:
        return 0

    new_text = text
    for old_url, new_path in replacements.items():
        new_text = new_text.replace(old_url, new_path)

    if new_text != text:
        md_path.write_text(new_text, encoding='utf-8')

    return len(replacements)

def main():
    IMAGES_DIR.mkdir(parents=True, exist_ok=True)
    md_files = sorted(MARKDOWN_DIR.glob("*.md"))
    total_replaced = 0
    for md_path in md_files:
        count = 0
        urls = find_image_urls(md_path.read_text(encoding='utf-8'))
        real_urls = [u for u in urls if not BADGE_DOMAINS.search(u)]
        if real_urls:
            print(f"\n{md_path.name} ({len(real_urls)} images)")
            count = process_file(md_path, IMAGES_DIR)
        total_replaced += count

    print(f"\nDone. {total_replaced} URL(s) replaced across all files.")
    print(f"Images saved to: {IMAGES_DIR}")

if __name__ == "__main__":
    main()

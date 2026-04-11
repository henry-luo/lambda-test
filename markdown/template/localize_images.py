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

import html
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
    # Build filename from domain + full path (slashes → underscores)
    path_part = parsed.path.strip('/')
    if path_part:
        raw = f"{parsed.netloc}/{path_part}"
    else:
        raw = parsed.netloc
    # Include meaningful query params, stripping only presentation/noise params
    if parsed.query:
        skip_params = {'v', 's', 'style', 'sanitize', 'color', 'colorA', 'colorB',
                       'branch', 'branchName', 'logo', 'logoColor', 'logoWidth',
                       'logoSize', 'longCache', 'label', 'labelColor',
                       'compression', 'maxAge', 'service', 'definitionId',
                       'url', 'query'}
        params = [p for p in parsed.query.split('&')
                  if p and p.split('=')[0] not in skip_params]
        if params:
            raw += '/' + '&'.join(params)
    # Replace path separators and unsafe characters with underscores
    candidate = re.sub(r'[/\\]', '_', raw)
    candidate = re.sub(r'[^\w.\-\x80-\U0010FFFF]', '_', candidate)
    # Collapse multiple underscores
    candidate = re.sub(r'_+', '_', candidate)
    if not candidate:
        candidate = hashlib.md5(url.encode()).hexdigest()[:8] + '.bin'
    # Truncate long filenames: keep base ≤ 120 chars (sans extension)
    # by trimming and appending an 8-char md5 hash of the URL.
    if _has_image_ext(candidate):
        dot_idx = candidate.rfind('.')
        base, ext = candidate[:dot_idx], candidate[dot_idx:]  # e.g. ".svg"
    else:
        base, ext = candidate, ''
    MAX_BASE = 120
    if len(base) > MAX_BASE:
        url_hash = hashlib.md5(url.encode()).hexdigest()[:8]
        # 111 chars + '_' + 8 chars hash = 120
        base = base[:MAX_BASE - 9] + '_' + url_hash
    return base + ext

# Regex to match fenced code blocks (``` or ~~~)
_CODE_BLOCK_RE = re.compile(r'^(`{3,}|~{3,}).*?^\1', re.MULTILINE | re.DOTALL)
# Regex to match inline code
_INLINE_CODE_RE = re.compile(r'`[^`]+`')

def _code_spans(text: str):
    """Return sorted, non-overlapping (start, end) spans covering code blocks and inline code."""
    spans = []
    for m in _CODE_BLOCK_RE.finditer(text):
        spans.append((m.start(), m.end()))
    # Only add inline code spans that don't overlap with fenced blocks
    for m in _INLINE_CODE_RE.finditer(text):
        s, e = m.start(), m.end()
        if not any(max(s, bs) < min(e, be) for bs, be in spans):
            spans.append((s, e))
    spans.sort()
    return spans

def _strip_code_blocks(text: str) -> str:
    """Replace code blocks and inline code with spaces (preserves positions)."""
    for start, end in reversed(_code_spans(text)):
        text = text[:start] + ' ' * (end - start) + text[end:]
    return text

def find_image_urls(text: str):
    """Return all external image URLs found in markdown text (outside code blocks)."""
    # Strip code blocks for URL searching (preserves character positions)
    search_text = _strip_code_blocks(text)
    # Markdown: ![alt](URL) or ![alt](URL "title")
    md_imgs = re.findall(r'!\[[^\]]*\]\((https?://[^\s)"\']+)', search_text)
    # HTML <img src="URL"> or <img src='URL'>
    html_imgs = re.findall(r'<img[^>]+src=["\']?(https?://[^\s"\'>/][^\s"\']*)', search_text)
    # HTML <source srcset="URL"> (used in <picture>)
    srcset_imgs = re.findall(r'<source[^>]+srcset=["\']?(https?://[^\s"\']+)', search_text)
    # Reference-style image links: ![alt][ref] or ![ref] ... [ref]: URL
    ref_imgs = []
    ref_defs = dict(re.findall(r'^\[([^\]]+)\]:\s+(https?://\S+)', search_text, re.MULTILINE))
    for ref_name, ref_url in ref_defs.items():
        # Explicit: ![alt][ref] or shorthand: ![ref]
        if re.search(rf'!\[[^\]]*\]\[{re.escape(ref_name)}\]', search_text) or \
           re.search(rf'!\[{re.escape(ref_name)}\](?!\[|\()', search_text):
            ref_imgs.append(ref_url)
    # All unique, preserving order
    seen = set()
    result = []
    # md_imgs, html_imgs, and ref_imgs are inherently image URLs; only srcset needs ext check
    img_set = set(md_imgs) | set(html_imgs) | set(ref_imgs)
    for url in md_imgs + html_imgs + srcset_imgs + ref_imgs:
        # Decode HTML entities for URL inspection (e.g. &#x3D; -> =)
        decoded = html.unescape(url)
        base = decoded.split('?')[0].split('#')[0]
        has_ext = bool(re.search(r'\.(png|jpg|jpeg|gif|svg|webp|ico)$', base, re.I))
        # For ![](URL) and <img src> URLs, allow extensionless (e.g. GitHub avatars)
        if not has_ext and url not in img_set:
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

def _has_image_ext(name: str) -> bool:
    """Check if a filename ends with a known image extension."""
    return bool(re.search(r'\.(png|jpg|jpeg|gif|svg|webp|ico)$', name, re.I))

def _detect_ext_from_file(dest: Path) -> Path:
    """If dest has no image extension, detect from file content and return new path.
    Uses string concatenation instead of Path.with_suffix() to avoid issues
    with dots in domain-based filenames."""
    if _has_image_ext(dest.name):
        return dest
    # Check magic bytes
    try:
        with open(dest, 'rb') as f:
            header = f.read(16)
        ext = None
        if header[:8] == b'\x89PNG\r\n\x1a\n':
            ext = '.png'
        elif header[:3] == b'\xff\xd8\xff':
            ext = '.jpg'
        elif header[:6] in (b'GIF87a', b'GIF89a'):
            ext = '.gif'
        elif header[:4] == b'RIFF' and header[8:12] == b'WEBP':
            ext = '.webp'
        elif b'<svg' in header or b'<?xml' in header:
            ext = '.svg'
        if ext:
            return dest.parent / (dest.name + ext)
    except Exception:
        pass
    return dest

def process_file(md_path: Path, images_dir: Path) -> int:
    """Process one markdown file. Returns number of images replaced."""
    text = md_path.read_text(encoding='utf-8')
    urls = find_image_urls(text)
    if not urls:
        return 0

    replacements = {}  # original_url -> local_rel_path
    for url in urls:
        # Decode HTML entities for downloading and filename
        decoded_url = html.unescape(url)
        raw_url = to_raw_url(decoded_url)
        filename = sanitize_filename(raw_url)
        dest = images_dir / filename
        # Check if file already exists (possibly with a detected extension)
        # Use filename string directly for glob (Path.stem mishandles dots in domain names)
        existing = sorted(images_dir.glob(filename + '.*'))
        if existing and _has_image_ext(existing[0].name):
            final_name = existing[0].name
        else:
            print(f"  {'↓' if not dest.exists() else '✓'} {filename}")
            print(f"    from: {raw_url}")
            if not download_image(raw_url, dest):
                continue
            # Detect extension if missing
            final_dest = _detect_ext_from_file(dest)
            if final_dest != dest and dest.exists():
                dest.rename(final_dest)
            final_name = final_dest.name
        replacements[url] = f"{IMG_REL_PATH}/{final_name}"

    if not replacements:
        return 0

    # Replace URLs only outside fenced code blocks and inline code
    new_text = _replace_outside_code(text, replacements)

    if new_text != text:
        md_path.write_text(new_text, encoding='utf-8')

    return len(replacements)

def _replace_outside_code(text: str, replacements: dict) -> str:
    """Replace URLs in text, but skip occurrences inside fenced code blocks or inline code.
    Splits text into alternating prose/code segments and only replaces in prose."""
    # Split text into segments: (content, is_code)
    segments = []
    last_end = 0
    for start, end in _code_spans(text):
        if start > last_end:
            segments.append((text[last_end:start], False))  # prose
        segments.append((text[start:end], True))  # code
        last_end = end
    if last_end < len(text):
        segments.append((text[last_end:], False))  # trailing prose

    # Apply replacements only in prose segments (longest URLs first to avoid
    # partial matches when a shorter URL is a substring of a longer one)
    sorted_replacements = sorted(replacements.items(), key=lambda x: -len(x[0]))
    for i, (content, is_code) in enumerate(segments):
        if is_code:
            continue
        for old_url, new_path in sorted_replacements:
            content = content.replace(old_url, new_path)
        segments[i] = (content, False)

    return ''.join(content for content, _ in segments)

def main():
    IMAGES_DIR.mkdir(parents=True, exist_ok=True)
    md_files = sorted(MARKDOWN_DIR.glob("*.md"))
    total_replaced = 0
    for md_path in md_files:
        count = 0
        urls = find_image_urls(md_path.read_text(encoding='utf-8'))
        if urls:
            print(f"\n{md_path.name} ({len(urls)} images)")
            count = process_file(md_path, IMAGES_DIR)
        total_replaced += count

    print(f"\nDone. {total_replaced} URL(s) replaced across all files.")
    print(f"Images saved to: {IMAGES_DIR}")

if __name__ == "__main__":
    main()

#!/usr/bin/env python3
"""
Localize remote images in markdown HTML test pages.

Downloads all remote (https://) images referenced in md_*.html files
and saves them locally under ../support/images/, updating the HTML
src attributes to point to the local copies.

Image filenames are derived from the URL to ensure uniqueness and
readability (domain + sanitized path).

Usage:
    python3 localize_images.py           # Process all md_*.html files
    python3 localize_images.py --dry-run # Show what would be done
"""

import os
import sys
import re
import hashlib
import glob
import urllib.request
import urllib.error
import ssl
import time

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
SUPPORT_IMAGES_DIR = os.path.join(SCRIPT_DIR, '..', 'support', 'images')
RELATIVE_PREFIX = '../support/images/'

# Max filename length (excluding extension)
MAX_NAME_LEN = 120

# Timeout for HTTP downloads (seconds)
DOWNLOAD_TIMEOUT = 15


def url_to_filename(url):
    """Convert a URL to a safe, readable local filename."""
    # Remove scheme
    clean = re.sub(r'^https?://', '', url)
    # Remove query string and fragment
    clean = clean.split('?')[0].split('#')[0]
    # Replace path separators and unsafe chars
    clean = re.sub(r'[/\\:*"<>|@&=+%]', '_', clean)
    # Collapse multiple underscores
    clean = re.sub(r'_+', '_', clean)
    # Strip leading/trailing underscores
    clean = clean.strip('_')

    # If too long, truncate and add hash suffix for uniqueness
    if len(clean) > MAX_NAME_LEN:
        url_hash = hashlib.md5(url.encode()).hexdigest()[:8]
        clean = clean[:MAX_NAME_LEN - 9] + '_' + url_hash

    # Determine extension from URL or default
    ext_match = re.search(r'\.(png|jpg|jpeg|gif|svg|webp|ico|bmp)$', clean, re.IGNORECASE)
    if ext_match:
        # Extension is already part of the name
        pass
    else:
        # No extension detected - will infer from Content-Type after download
        pass

    return clean


def infer_extension(content_type, data):
    """Infer file extension from Content-Type header or file magic bytes."""
    if content_type:
        ct = content_type.lower()
        if 'svg' in ct:
            return '.svg'
        if 'png' in ct:
            return '.png'
        if 'jpeg' in ct or 'jpg' in ct:
            return '.jpg'
        if 'gif' in ct:
            return '.gif'
        if 'webp' in ct:
            return '.webp'
        if 'ico' in ct:
            return '.ico'

    # Check magic bytes
    if data:
        if data[:4] == b'\x89PNG':
            return '.png'
        if data[:2] == b'\xff\xd8':
            return '.jpg'
        if data[:6] in (b'GIF87a', b'GIF89a'):
            return '.gif'
        if data[:4] == b'RIFF' and data[8:12] == b'WEBP':
            return '.webp'
        if b'<svg' in data[:500]:
            return '.svg'

    return '.bin'


def has_image_extension(filename):
    """Check if filename already has a known image extension."""
    return bool(re.search(r'\.(png|jpg|jpeg|gif|svg|webp|ico|bmp)$', filename, re.IGNORECASE))


def download_image(url, dest_path):
    """Download an image from URL to dest_path. Returns True on success."""
    # Create an SSL context that doesn't verify (some badge services have cert issues)
    ctx = ssl.create_default_context()

    # Encode non-ASCII characters in URL path
    from urllib.parse import quote, urlparse, urlunparse
    parsed = urlparse(url)
    encoded_path = quote(parsed.path, safe='/:@!$&\'()*+,;=-._~')
    encoded_query = quote(parsed.query, safe='/:@!$&\'()*+,;=-._~?')
    safe_url = urlunparse((parsed.scheme, parsed.netloc, encoded_path,
                           parsed.params, encoded_query, parsed.fragment))

    req = urllib.request.Request(safe_url, headers={
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36'
    })

    try:
        with urllib.request.urlopen(req, timeout=DOWNLOAD_TIMEOUT, context=ctx) as resp:
            data = resp.read()
            content_type = resp.headers.get('Content-Type', '')

            # If dest_path has no image extension, infer and append
            if not has_image_extension(dest_path):
                ext = infer_extension(content_type, data)
                dest_path += ext

            os.makedirs(os.path.dirname(dest_path), exist_ok=True)
            with open(dest_path, 'wb') as f:
                f.write(data)

            return dest_path, len(data)
    except (urllib.error.URLError, urllib.error.HTTPError, TimeoutError, OSError) as e:
        return None, str(e)


def process_files(dry_run=False):
    """Process all md_*.html files, localizing remote images."""
    html_files = sorted(glob.glob(os.path.join(SCRIPT_DIR, 'md_*.html')))
    if not html_files:
        print("No md_*.html files found")
        return

    print(f"Processing {len(html_files)} HTML files...")

    # Collect all unique remote image URLs
    url_pattern = re.compile(r'src="(https://[^"]+)"')
    all_urls = set()
    file_urls = {}  # file -> set of urls

    for html_file in html_files:
        with open(html_file, 'r', encoding='utf-8') as f:
            content = f.read()
        raw_urls = set(url_pattern.findall(content))
        file_urls[html_file] = raw_urls
        all_urls.update(raw_urls)

    print(f"Found {len(all_urls)} unique remote image URLs")

    # Decode HTML entities in URLs for downloading
    import html as html_mod

    def decode_url(url):
        return html_mod.unescape(url)

    if dry_run:
        for url in sorted(all_urls)[:20]:
            print(f"  {url}")
        if len(all_urls) > 20:
            print(f"  ... and {len(all_urls) - 20} more")
        return

    # Download all unique images
    url_to_local = {}  # url -> relative path
    downloaded = 0
    failed = 0
    skipped = 0

    for i, raw_url in enumerate(sorted(all_urls)):
        url = decode_url(raw_url)  # Decode &amp; etc. for actual HTTP request
        filename = url_to_filename(url)
        dest_base = os.path.join(SUPPORT_IMAGES_DIR, filename)

        # Check if already downloaded (with any extension)
        existing = glob.glob(dest_base + '.*') if not has_image_extension(dest_base) else []
        if has_image_extension(dest_base) and os.path.exists(dest_base):
            existing = [dest_base]

        if existing:
            # Already localized
            local_name = os.path.basename(existing[0])
            url_to_local[raw_url] = RELATIVE_PREFIX + local_name
            skipped += 1
            continue

        # Download
        result_path, info = download_image(url, dest_base)
        if result_path:
            local_name = os.path.basename(result_path)
            url_to_local[raw_url] = RELATIVE_PREFIX + local_name
            downloaded += 1
            if (downloaded + skipped) % 20 == 0:
                print(f"  Progress: {downloaded + skipped + failed}/{len(all_urls)} "
                      f"(downloaded: {downloaded}, skipped: {skipped}, failed: {failed})")
        else:
            print(f"  FAILED: {url[:80]} -> {info}")
            failed += 1
            # Keep original URL for failed downloads
            continue

        # Rate limit to avoid being blocked
        if downloaded % 10 == 0:
            time.sleep(0.5)

    print(f"\nDownload summary: {downloaded} new, {skipped} existing, {failed} failed")

    # Update HTML files
    updated_files = 0
    for html_file in html_files:
        with open(html_file, 'r', encoding='utf-8') as f:
            content = f.read()

        original = content
        for raw_url in file_urls[html_file]:
            if raw_url in url_to_local:
                content = content.replace(f'src="{raw_url}"', f'src="{url_to_local[raw_url]}"')

        if content != original:
            with open(html_file, 'w', encoding='utf-8') as f:
                f.write(content)
            updated_files += 1

    print(f"Updated {updated_files}/{len(html_files)} HTML files")


if __name__ == '__main__':
    dry_run = '--dry-run' in sys.argv
    process_files(dry_run=dry_run)

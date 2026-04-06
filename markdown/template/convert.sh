#!/usr/bin/env bash
# convert.sh — Convert ../markdown/*.md to GitHub-styled HTML via Jekyll
# Output: ../../layout/data/markdown/
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
MARKDOWN_DIR="$(dirname "$SCRIPT_DIR")"
DOCS_DIR="$SCRIPT_DIR/_docs"
OUTPUT_DIR="$SCRIPT_DIR/../../layout/data/markdown"

# ── Colour helpers ────────────────────────────────────────────────────────
bold=$'\e[1m'; reset=$'\e[0m'; green=$'\e[32m'; red=$'\e[31m'; blue=$'\e[34m'
step() { echo "${bold}${blue}→${reset} $*"; }
ok()   { echo "${bold}${green}✓${reset} $*"; }
die()  { echo "${bold}${red}✗${reset} $*" >&2; exit 1; }

# ── Prerequisites ─────────────────────────────────────────────────────────
command -v ruby  &>/dev/null || die "Ruby not found. Install via: brew install ruby"
command -v gem   &>/dev/null || die "gem not found. Check your Ruby installation."

if ! command -v bundle &>/dev/null; then
  step "Installing Bundler..."
  gem install bundler --quiet
fi

# ── Install gems (only when Gemfile.lock is missing or Gemfile changed) ───
cd "$SCRIPT_DIR"
if [[ ! -f Gemfile.lock ]] || [[ Gemfile -nt Gemfile.lock ]]; then
  step "Installing gems to ./vendor/bundle (first run may take a minute)..."
  bundle install --path vendor/bundle --quiet
fi

# ── Prepare _docs/ collection ─────────────────────────────────────────────
step "Preparing docs..."
rm -rf "$DOCS_DIR"
mkdir -p "$DOCS_DIR"

count=0
for mdfile in "$MARKDOWN_DIR"/*.md; do
  [[ -f "$mdfile" ]] || continue
  filename="$(basename "$mdfile")"
  name="${filename%.md}"

  # Human-readable title: replace _ and - with spaces, capitalise first word
  title="$(echo "$name" | sed 's/[_-]/ /g')"

  # Check for existing YAML front matter (first line must be exactly "---")
  firstline="$(head -1 "$mdfile")"
  if [[ "$firstline" == "---" ]]; then
    # Already has front matter — inject layout only if missing
    if grep -q "^layout:" "$mdfile"; then
      cp "$mdfile" "$DOCS_DIR/$filename"
    else
      # Insert layout: page after the opening ---
      {
        echo "---"
        echo "layout: page"
        tail -n +2 "$mdfile"
      } > "$DOCS_DIR/$filename"
    fi
  else
    # No front matter — prepend it
    {
      printf -- '---\n'
      printf 'layout: page\n'
      printf 'title: "%s"\n' "$title"
      printf -- '---\n\n'
      cat "$mdfile"
    } > "$DOCS_DIR/$filename"
  fi

  count=$((count + 1))
done

ok "Processed $count markdown files"

# ── Create output directory ───────────────────────────────────────────────
mkdir -p "$OUTPUT_DIR"

# ── Build ─────────────────────────────────────────────────────────────────
step "Building Jekyll site..."
bundle exec jekyll build \
  --source      "$SCRIPT_DIR" \
  --destination "$OUTPUT_DIR" \
  --quiet

ok "Done!  HTML pages written to:"
echo "       $(cd "$OUTPUT_DIR" && pwd)"
echo ""
echo "  Open: file://$(cd "$OUTPUT_DIR" && pwd)/index.html"

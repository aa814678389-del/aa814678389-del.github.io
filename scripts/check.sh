#!/usr/bin/env bash
# Pre-publish check. Fails (exit 1) if anything that must not go live is still in the site:
#   [X], [X%], [X …] placeholders · TODO notes · the placeholder LinkedIn URL · the placeholder resume PDF
# Runs automatically before every GitHub deploy, and before the local preview.
set -u
cd "$(dirname "$0")/.."

# Only your content files are scanned (not layouts or includes).
CONTENT=(_case_studies _data _config.yml index.html 404.html)
problems=0

hits=$(grep -rnE '\[X[^]]*\]|TODO|YOUR-HANDLE' "${CONTENT[@]}" 2>/dev/null)
if [ -n "$hits" ]; then
  echo "✗ Placeholders still in your content (file:line):"
  echo "$hits" | sed 's/^/    /'
  problems=$((problems + $(echo "$hits" | wc -l)))
fi

resume=assets/resume/andrew-gendel-resume.pdf
if [ ! -f "$resume" ]; then
  echo "✗ Resume missing: $resume"; problems=$((problems + 1))
elif grep -q 'PLACEHOLDER-RESUME' "$resume"; then
  echo "✗ $resume is still the placeholder. Replace it with your general resume."
  problems=$((problems + 1))
fi

if [ "$problems" -gt 0 ]; then
  echo
  echo "Pre-publish check FAILED: $problems item(s) to fix. The site will not deploy until these are gone."
  exit 1
fi
echo "✓ Pre-publish check passed: no placeholders, TODOs, or placeholder files."

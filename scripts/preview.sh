#!/usr/bin/env bash
# Local preview at http://localhost:4000 (optional; GitHub publishes without this).
# Needs Ruby + Bundler once:  bundle install
# Runs the pre-publish check first. Drafts still preview, but you'll see a loud warning.
cd "$(dirname "$0")/.."
export LANG="${LANG:-en_US.UTF-8}" LC_ALL="${LC_ALL:-en_US.UTF-8}"   # Jekyll needs a UTF-8 locale
if ! bash scripts/check.sh; then
  echo
  echo "⚠  WARNING: previewing a site that is NOT ready to publish (see above)."
  echo "   GitHub will refuse to deploy until the check passes."
  echo
fi
exec bundle exec jekyll serve --livereload "$@"

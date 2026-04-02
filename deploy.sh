#!/bin/bash
set -e

echo "Building site..."
npm run build

echo "Deploying to pages branch..."
cd dist
git init
git config user.name "Deploy"
git config user.email "deploy@local"
git add -A
git commit -m "Deploy $(date '+%Y-%m-%d %H:%M')"
git push --force https://codeberg.org/roelandordelman/sos-website.git HEAD:pages
cd ..

echo "Done! Site live at: https://roelandordelman.codeberg.page/sos-website/"

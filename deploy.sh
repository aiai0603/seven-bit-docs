#!/usr/bin/env sh

set -e

pnpm run docs:build

cd ./.vitepress/dist

git init
git add -A
git commit -m 'deploy seven-bit-ui docs'

git push -f git@github.com:ox4f5da2/seven-bit-docs.git master

cd -
#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
FRONTEND_DIR="$ROOT_DIR/frontend"
NODE_DIR="$ROOT_DIR/../.tools/node-v20.18.0-linux-x64/bin"

export PATH="$NODE_DIR:$PATH"

cd "$FRONTEND_DIR"
rm -rf .next
npm run build

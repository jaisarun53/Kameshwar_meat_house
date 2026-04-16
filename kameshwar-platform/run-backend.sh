#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
NODE_DIR="$ROOT_DIR/../.tools/node-v20.18.0-linux-x64/bin"

export PATH="$NODE_DIR:$PATH"

cd "$ROOT_DIR/backend"
npm run start:dev

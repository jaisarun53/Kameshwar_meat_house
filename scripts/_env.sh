#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"

if command -v node >/dev/null 2>&1 && command -v npm >/dev/null 2>&1; then
  export PATH="$(dirname "$(command -v node)"):$PATH"
elif [ -d "$REPO_ROOT/.tools/node-v20.18.0-linux-x64/bin" ]; then
  export PATH="$REPO_ROOT/.tools/node-v20.18.0-linux-x64/bin:$PATH"
elif [ -d "$REPO_ROOT/../Kameshwar_meat_House/.tools/node-v20.18.0-linux-x64/bin" ]; then
  export PATH="$REPO_ROOT/../Kameshwar_meat_House/.tools/node-v20.18.0-linux-x64/bin:$PATH"
else
  echo "Node.js was not found. Install Node or place the local toolchain in .tools/." >&2
  exit 1
fi

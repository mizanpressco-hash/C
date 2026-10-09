#!/usr/bin/env bash
# Test: Bootstrap Missing Skill Path Mock
# Verifies that when fs.existsSync returns false for SKILL.md, getBootstrapContent behaves correctly.
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"

echo "=== Test: Bootstrap Missing Skill Path Mock ==="

source "$SCRIPT_DIR/setup.sh"
trap cleanup_test_env EXIT

node "$SCRIPT_DIR/test-missing-skill-mock.mjs" "$SUPERPOWERS_PLUGIN_FILE"

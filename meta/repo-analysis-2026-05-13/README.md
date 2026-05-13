# meta/repo-analysis-2026-05-13/

Frozen cross-repo analysis snapshot.

- [`INTERACTIVE_LOG.md`](INTERACTIVE_LOG.md) — per-repo state + cross-repo observations (condensed)
- [`RECOMMENDATIONS.md`](RECOMMENDATIONS.md) — recommended changes with reasoning per repo (`c` highlighted in §4)
- **`directory.html`** — interactive tree of all four repos. Canonical copy lives in `obsidian-ai-core-vs-drifting`:
  https://github.com/mizanpressco-hash/obsidian-ai-core-vs-drifting/blob/claude/interactive-repo-analysis-3hcZ6/meta/repo-analysis-2026-05-13/directory.html

These files exist on the `claude/interactive-repo-analysis-3hcZ6` branch of all four repos: `obsidian-ai-core-vs-drifting`, `mizan-vault`, `mizan-project`, and `c`. The most complete prose copy of `INTERACTIVE_LOG.md` lives in `obsidian-ai-core-vs-drifting`; the other three repos carry a condensed mirror that links back.

Future analyses should land at `meta/repo-analysis-YYYY-MM-DD/` alongside this one rather than overwriting it.

## Why this file is in a Superpowers fork

The analysis is in this repo because `c` is part of the four-repo Mizan family and an agent operating here (e.g. for an upstream-sync) benefits from the same cross-repo context that an agent working on `mizan-project` would have. Local Mizan-specific divergence should be documented in an `UPSTREAM.md` at the repo root (see [`RECOMMENDATIONS.md` §4.1](RECOMMENDATIONS.md#41-add-an-upstreammd-at-repo-root)).

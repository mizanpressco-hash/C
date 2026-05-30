# UPSTREAM tracking — this is a fork

> Added 2026-05-13 as part of the cross-repo analysis (recs §4.1, §4.5, §4.6).
> This file is local Mizan divergence and is intentionally NOT part of the
> upstream-tracked surface. Keep Mizan-specific notes here, not in `README.md`,
> so upstream re-syncs don't conflict.

## What this repo is

A vendored fork / mirror of [`obra/superpowers`](https://github.com/obra/superpowers)
(the Superpowers multi-harness coding-agent methodology by Jesse Vincent / Prime
Radiant, MIT-licensed).

- **Tracked release at last sync:** `v5.1.0` (`main` @ `f2cbfbe`, upstream PR #1468, 2026-05-04).
- **Why vendored instead of installed from upstream:** reproducibility (a pinned
  tag means exactly these bytes), audit-ability (every upstream change can be
  reviewed before it lands here), and a controllable URL for harness install
  instructions. These three properties justify the maintenance cost; do **not**
  un-fork.

## Re-sync procedure

1. Add upstream remote (once): `git remote add upstream https://github.com/obra/superpowers.git`
2. Fetch tags: `git fetch upstream --tags`
3. Review the delta before merging: `git log --oneline v5.1.0..<new-tag>`
4. **Re-run the `hooks/session-start` audit (below) after every sync** — it is the
   one file that injects context into every coding-agent session.
5. Merge/rebase onto the new tag; update the "Tracked release" line above.

## Mizan-specific divergence

As of 2026-05-13, the only Mizan-specific files are:

- `UPSTREAM.md` (this file)
- `meta/repo-analysis-2026-05-13/` (the cross-repo analysis snapshot)

No Superpowers skills, hooks, or manifests have been modified from upstream.
If Mizan-specific skills are ever added (see Decision 2 in the analysis:
`mizan-state`, `cloud-state-mindmaps`), the standing direction is a **separate
`mizan-skills` plugin repo that depends on this one**, NOT in-tree additions —
to avoid coupling private project skills to an upstream-tracked fork (a
sovereignty-line concern).

## hooks/session-start audit — 2026-05-13

**Result: clean.** The script (`hooks/session-start`, blob `2460429`) does the
following and nothing else:

- Resolves `skills/using-superpowers/SKILL.md` relative to the plugin root.
- If that file is missing, emits `{}` and exits 0 (no-op).
- Otherwise reads the skill's text and wraps it in an `additionalContext`
  payload instructing the agent to read the Superpowers bootstrap skill at
  session start.
- Platform-detects: emits Copilot-CLI/SDK top-level `additionalContext` when
  `COPILOT_CLI` is set, otherwise Claude Code's `hookSpecificOutput` shape.

No network calls, no environment exfiltration, no secrets access, no writes
outside stdout. The only thing it injects into a Mizan coding-agent session is
the bundled `using-superpowers/SKILL.md` bootstrap. Re-audit on every upstream
re-sync (the content of `using-superpowers/SKILL.md` is what actually reaches
the agent, so diff that file too, not just this script).

## Local usage (Mizan)

This fork is used as the methodology base for coding-agent work across the
Mizan repo family (`mizan-project`, the vaults). Install per the upstream
`README.md` for whichever harness; point any pinned install source at this
repo's tag rather than upstream when reproducibility matters.

> Note: this repo is slated to be renamed `c` → `superpowers-fork` (analysis
> Decision 4). After the rename, update local git remotes:
> `git remote set-url origin https://github.com/mizanpressco-hash/superpowers-fork.git`

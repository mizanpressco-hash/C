# Master Interactive Log — Mizan Press Co. Repo Family

> **Generated:** 2026-05-13
> **Scope:** All four repos under `mizanpressco-hash/` accessible via the GitHub MCP server.
> **Branch:** `claude/interactive-repo-analysis-3hcZ6` (mirrored across all four repos).
> **Interactive directory:** [`obsidian-ai-core-vs-drifting/meta/repo-analysis-2026-05-13/directory.html`](https://github.com/mizanpressco-hash/obsidian-ai-core-vs-drifting/blob/claude/interactive-repo-analysis-3hcZ6/meta/repo-analysis-2026-05-13/directory.html) — self-contained HTML, open in a browser for the tree view.
> **Recommendations:** [`RECOMMENDATIONS.md`](RECOMMENDATIONS.md)

This is the condensed cross-repo state mirror. The full prose version (with collapsible per-repo deep-dives) lives at the same path on the `obsidian-ai-core-vs-drifting` branch.

---

## 0. One-screen summary

| # | Repo | Default branch SHA | Purpose | Last commit |
|---|------|--------------------|---------|-------------|
| 1 | [`obsidian-ai-core-vs-drifting`](https://github.com/mizanpressco-hash/obsidian-ai-core-vs-drifting) | `4b21e71` | Obsidian vault — live bridge sandbox; `mizan.md` (sovereignty) + `memories.md` (memory anchors) | 2026-05-09 |
| 2 | [`mizan-vault`](https://github.com/mizanpressco-hash/mizan-vault) | `1eb1dda` | Curated mirror of canonical synthesis / operational / editorial / skills | 2026-05-08 |
| 3 | [`mizan-project`](https://github.com/mizanpressco-hash/mizan-project) | `94aac1f` | Working surface — apps, scripts, datasets, reports (canonical layer **air-gapped**) | 2026-05-10 (PR #1 merged) |
| 4 | [`c`](https://github.com/mizanpressco-hash/c) | `f2cbfbe` | Fork of `obra/superpowers` v5.1.0 — multi-harness coding-agent methodology | 2026-05-04 (upstream) |

The four repos line up on **knowledge / state / production / tooling**. Repos 1–3 are Mizan project surface; repo 4 (this repo) is vendored methodology that supports work inside repos 1–3.

## 1. `obsidian-ai-core-vs-drifting`

- Obsidian vault, 7 top-level entries, 4 commits all on 2026-05-09. Contains `.obsidian/`, two empty `Untitled.*` placeholders, default `Welcome.md`, and two content files (`memories.md`, `mizan.md` with duplicated paragraphs).
- Unreferenced from any other repo's README.
- Per-repo actions: [`RECOMMENDATIONS.md` §1](RECOMMENDATIONS.md#1-obsidian-ai-core-vs-drifting).

## 2. `mizan-vault`

- Curated mirror, 38 files, ~0.59 MB. `synthesis/`, `operational/` (with `recent_directives/` 20–29), `editorial/` (with `published/` and `totc_applications/`), `skills/` (`mizan-state/`, `cloud-state-mindmaps/`).
- README is the canonical two-tier sovereignty design statement.
- Only two commits ever; the auto-sync cadence the README describes is not visible on the public side. Investigate.
- Per-repo actions: [`RECOMMENDATIONS.md` §2](RECOMMENDATIONS.md#2-mizan-vault).

## 3. `mizan-project`

- Working surface. `.github/` (workflows added in PR #1, 2026-05-10), `apps/`, `datasets/`, `logs/`, `reports/`, `scripts/`, `mizan-inventory-pass.skill` (22.7 KB at root), `ops_to_strategy_2026-05-05.md`.
- `.gitignore` enforces canonical-layer air-gap; `scripts/repo_watcher.py` auto-commits every 10 minutes.
- Two authors: `mizanpressco-hash` (GitHub config) and `albidhawim-prog` (content).
- The new Claude PR review workflow conflicts with the watcher's direct-to-`main` pattern — reconcile.
- Per-repo actions: [`RECOMMENDATIONS.md` §3](RECOMMENDATIONS.md#3-mizan-project).

## 4. `c` (Superpowers fork) — **this repo**

- Vendored fork of `obra/superpowers` at v5.1.0 (2026-05-04, PR #1468). 14 skills, 6 harness manifests (Claude Code, Codex CLI, Codex App, OpenCode, Cursor, Gemini CLI — plus Factory Droid and Copilot CLI per recent commits), hooks, tests.
- 30+ feature branches in the fork; `main` at upstream parity.
- No `UPSTREAM.md` or local README divergence today. From outside, a reader cannot tell which branches are local Mizan work vs. carried-over upstream feature branches.
- This analysis lives in this repo so that a coding agent working in `c` has the same cross-repo context as one working in `mizan-project` or the vaults.
- Per-repo actions: [`RECOMMENDATIONS.md` §4](RECOMMENDATIONS.md#4-c-superpowers-fork).

## 5. Cross-repo observations

1. Two identities operate: `mizanpressco-hash` (config / GitHub) and `albidhawim-prog` (content commits in `mizan-project`).
2. `mizan-vault`'s README + `mizan-project`'s README together = canonical two-tier sovereignty design.
3. `obsidian-ai-core-vs-drifting` is unreferenced; durable content lives outside the curated reading path.
4. Claude PR review workflows live only on `mizan-project`.
5. `c` (this repo) is at upstream parity — no Mizan-specific divergence on `main`. The Mizan-specific skills (`mizan-state`, `cloud-state-mindmaps`) live in `mizan-vault/skills/` rather than here, so the harnesses that install via this fork don't auto-load them.

## Cross-repo file flow

```
  local SSD (canonical, air-gapped)
  C:\Mizan\,  C:\Parent Folder\Mizan\,  D:\theory of the case\
  GCS corpus, model weights, evidence file
          │  Obsidian Git, repo_watcher.py, hand-curated copies
          ▼
  +-- mizan-project ----+      +-- mizan-vault -------+
  |  working surface    |----->|  curated mirror      |
  +---------+-----------+      +-----------+----------+
            │                              │
            ▼                              ▼
  +-- c (superpowers) --+      +-- obsidian-ai-* -----+
  |  methodology fork   |      |  sovereignty vault   |
  +---------------------+      +----------------------+
```

The four cloud-visible repos replace **none** of the canonical layer.

---

This condensed mirror lives at `meta/repo-analysis-2026-05-13/INTERACTIVE_LOG.md` on the same branch in all four repos. For the long-form per-repo sections with collapsible details, see the full copy in `obsidian-ai-core-vs-drifting`.

— end of master log —

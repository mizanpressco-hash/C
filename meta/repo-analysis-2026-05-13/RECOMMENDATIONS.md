# Recommendations — Repo Family, 2026-05-13

> **Companions:** [`INTERACTIVE_LOG.md`](INTERACTIVE_LOG.md) (state) · [`directory.html`](https://github.com/mizanpressco-hash/obsidian-ai-core-vs-drifting/blob/claude/interactive-repo-analysis-3hcZ6/meta/repo-analysis-2026-05-13/directory.html) (tree, in obsidian-ai-core-vs-drifting)
> Each item: **Recommendation · Where · Why · Trade-off / when to skip**. The reasoning is load-bearing — change the recommendation if the reasoning doesn't apply. None urgent; priority-ordered within each repo.
>
> **Reader note:** This repo (`c`) is the Superpowers fork. §4 below is the most directly applicable section.

---

## 0. About the analysis itself

### 0.1 Treat this as a single dated snapshot.
- **Where:** `meta/repo-analysis-2026-05-13/` on this branch.
- **Why:** Cross-repo analyses are useful when they're frozen reference points you can diff against later. If it becomes "the place we keep notes," it rots. Next pass: `meta/repo-analysis-2026-05-27/` next to it.
- **Trade-off:** Lose stable-URL convenience. Mitigation: a one-line `meta/README.md` pointing at the latest dated dir.

### 0.2 Re-run after the canonical-layer ratification cycle.
- **Why:** Several recommendations are blocked behind directives not yet ratified through the three-way gate referenced in `mizan-project/README.md`. Re-run after the next cycle.

---

## 1. `obsidian-ai-core-vs-drifting`

### 1.1 Delete `Welcome.md`, `Untitled.base`, `Untitled.canvas`.
- **Why:** Obsidian-template residue. `Welcome.md` ("Make a note of something...") misrepresents the vault as unused; future readers infer the vault is empty.

### 1.2 De-duplicate `mizan.md`.
- **Why:** Half the file is verbatim duplicate of the other half — a paste artifact. Substantive content is excellent (cleanest articulation of the sovereignty design); duplication adds noise.

### 1.3 Add frontmatter to `memories.md`.
- **Why:** Curated memory index, but no header explaining what / for whom / when last touched. A model reading it cold will treat it as content, not as an index.

### 1.4 Fix the trailing wikilink fragment in `memories.md`.
- **Why:** Last line is an unfinished edit committed mid-keystroke.

### 1.5 Add a one-paragraph `README.md` at the vault root.
- **Why:** Today nothing answers "what is this and how is it different from `mizan-vault`?"

### 1.6 Consider renaming the repo.
- **Why:** Repo names are metadata even on private repos. "Obsidian AI core vs. drifting" advertises the topic; same sovereignty concern as for file contents applies one level up.

---

## 2. `mizan-vault`

### 2.1 Verify the auto-sync cadence is actually running.
- **Why:** README claims 5-min auto-commit; repo has **two** commits ever. Cloud Claude sessions reading via GitHub MCP are reading 5-day-stale state but the README says near-realtime.

### 2.2 Add `last_synced` frontmatter to summary files.
- **Why:** Summaries of canonical files not in the repo; staleness undetectable.

### 2.3 Render `operational/project_map.md` from its canonical source (or remove the stub).

### 2.4 Add an index inside `editorial/totc_applications/`.

### 2.5 Surface the smoke-test marker.

### 2.6 Split the reading order into a dedicated `READING_ORDER.md`.

---

## 3. `mizan-project`

### 3.1 Reconcile the watcher daemon with the new Claude PR review workflow.
- **Why:** Watcher commits direct-to-`main`; PR review fires only on PRs. 100% of substantive changes bypass the review you just installed.

### 3.2 Update the "no feature branches" policy in README.
- **Why:** README says "… until there is more than one author." There are now two authors. Update.

### 3.3 Move dated `ops_to_strategy_2026-05-05.md` out of repo root.
- **Why:** Live document; shouldn't carry a date in the filename.

### 3.4 Add a docstring header to `mizan-inventory-pass.skill`.

### 3.5 Add branch protection on `main`.

### 3.6 Add a CODEOWNERS file.

---

## 4. `c` (Superpowers fork) — **this repo**

### 4.1 Add an `UPSTREAM.md` at repo root.
- **File:** new `UPSTREAM.md`.
- **Why:** This is a fork of `obra/superpowers` at v5.1.0 (HEAD: `f2cbfbe`, PR #1468). From outside, a reader has to compare two repos to figure that out, then read 30+ branches to figure out which ones are local Mizan work and which are vendored upstream-feature branches. An `UPSTREAM.md` that states:
  - upstream URL (`https://github.com/obra/superpowers`),
  - current tracked tag (`v5.1.0`),
  - re-sync command and cadence,
  - which branches/files (if any) carry Mizan-specific divergence,
  - why this fork exists at all (so future you doesn't delete it as "looks like an unused vendored fork"),
  - whether contributions can flow upstream (per upstream's README, new skills are generally not accepted from the community; bug fixes go in via `dev`)

  takes 10 minutes to write and removes the largest source of "what is this and why is it here" doubt about the fork.
- **Trade-off:** None. Even if there are zero divergences today, documenting that is the point.

### 4.2 Either rename the repo from `c` to `superpowers-fork`, or pin the rationale.
- **Why:** Single-letter repo names look like test repos / typos. README title is "Superpowers" but URL is `/c`. Rename to `superpowers`, `superpowers-fork`, or `mizan-superpowers` — or, if `c` is intentional (e.g. to keep CLI commands short — `cd ~/repos/c`), put one line in the README explaining the convention.
- **Trade-off:** Renames preserve redirects on GitHub but break `git remote -v` URLs on every existing clone and any hard-coded reference. If you have agent system prompts that point at `github.com/mizanpressco-hash/c`, those break too. Do once and not again.

### 4.3 Prune merged-or-stale feature branches.
- **Repo branches:** 30+ named `codex/pri-823-…`, `codex/pri-1367-…`, `f/codex`, `f/cross-platform`, `feat/codex-native-skills`, `claude/review-opencode-…`, etc.
- **Why:** Most of these branches landed in upstream v5.1.0 (`f2cbfbe`'s squash mentions PRI-823, PRI-974, etc.). A vendored fork that carries dozens of branches whose work is already in `main` adds noise without value. Routine maintenance: delete merged branches; keep `dev` if you might rebase against upstream; tag anything you want to preserve.
- **Trade-off:** If you've been using these branches for archaeology ("what did the worktree rototill look like at v0.3?") they have value — but `git log --all` and tags can do that better than dangling branches.

### 4.4 Consider lifting `skills/mizan-state/` and `skills/cloud-state-mindmaps/` from `mizan-vault` into `c/skills/`.
- **Where:** `mizan-vault/skills/mizan-state/` and `mizan-vault/skills/cloud-state-mindmaps/` → potentially `c/skills/mizan-state/` and `c/skills/cloud-state-mindmaps/`.
- **Why:** Today the Mizan-specific skills sit in the vault because that's where you ship reference content for cloud Claude. But `c` is the methodology library that other harnesses install from — if you want a Codex CLI or Cursor agent to pick up `mizan-state` automatically the way they pick up `brainstorming`, the skill has to live in the plugin tree, not in the vault. Lifting them in lets all six harnesses see them with no extra install step.
- **Trade-off (significant):** This couples your private project skills to a public-facing methodology fork. If you ever upstream a change back to `obra/superpowers`, you'd need to be careful not to leak Mizan-specific skills. Mitigation: a `.gitattributes` export-ignore on the Mizan skills, plus an `UPSTREAM.md` clause that documents what is divergent. **Don't do this lightly** — the right answer might be a separate `mizan-skills` plugin repo that depends on `c`.
- **When to skip:** If skills only ever load via the `mizan-vault` MCP read path (cloud Claude reads them as documents, not as harness-loaded skills), they belong in the vault. Today that is the actual pattern, so this recommendation is forward-looking, not urgent.

### 4.5 Audit the `hooks/session-start` script.
- **File:** `hooks/session-start` (2.9 KB).
- **Why:** This file injects context at every coding-agent session start across all six harnesses. In the Mizan context — where the project's whole posture is that you control what your tooling tells your agents — knowing exactly what `session-start` injects is non-negotiable. It is the equivalent of a system-prompt prefix that runs on your dev environment. Audit once, document the audit (one paragraph in `UPSTREAM.md`), re-audit every time you sync from upstream.
- **Trade-off:** None. This is a 5-minute file read and a single paragraph of notes.

### 4.6 Add a README link from `c` → `mizan-project`.
- **File:** `README.md` (new "Local usage" section at the very top).
- **Why:** Today the README is upstream's README verbatim. Nothing tells a reader who lands on this fork "we use this in `mizanpressco-hash/mizan-project`; install via these specific commands; the watcher daemon needs these specific skills." Without that, a future Mizan operator who clones `c` to a new machine has to re-derive how it's used in this org.
- **Trade-off:** Adds local divergence to a file you re-sync from upstream; counter-mitigation is to put the local section at the very top, separated by a clear heading (e.g. `## Local usage (Mizan)`), so future re-syncs can keep the local block intact.

---

## 5. Cross-repo recommendations

### 5.1 Decide whether `obsidian-ai-core-vs-drifting` and `mizan-vault` should be one repo.

### 5.2 Install the Claude review workflow on `mizan-vault` and `obsidian-ai-core-vs-drifting`.

### 5.3 Add a `meta/` directory convention to all four repos.

### 5.4 Tag `pre-mizan-analysis-2026-05-13` on each repo's `main`.

### 5.5 Write a short `STATE.md` at each repo's root.

(Full reasoning for these is in the long-form copy at
`obsidian-ai-core-vs-drifting/meta/repo-analysis-2026-05-13/RECOMMENDATIONS.md`.)

---

## 6. NOT recommending

- **Don't** consolidate `mizan-project` and `mizan-vault`. The split is doing real work.
- **Don't** make the canonical layer reachable from any of these repos. Air-gap is the point.
- **Don't** un-fork `c` (this repo). Vendoring `obra/superpowers` buys reproducibility, audit-ability, and controllable install URLs.
- **Don't** make any of these repos public.

— end of recommendations —

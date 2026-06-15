---
name: feedback-no-coauthor
description: Do not add Co-Authored-By Claude line to commit messages
metadata:
  type: feedback
---

Never add `Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>` to commit messages.

**Why:** User preference — keep commit history clean without AI co-authorship lines.

**How to apply:** Omit the Co-Authored-By trailer from all git commits in this project.

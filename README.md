# mcp-helper

A new, conversational CLI (per `new_start/PRD.md`) to discover, install, configure, and manage MCP servers globally and per project.

- Lives under `new_start/mcp-helper/` to keep existing repo content as historical context and source material.
- Uses authoritative `server_card`s for curated servers (initial 15–17), with allow-all policy for any configurable server.
- Prioritizes HTTP transport and Docker deployments; supports SSE/stdio or NPX where needed.

## Structure (initial)

- `packages/cli/` – CLI implementation (commands, libs)
- `catalog/server_cards/` – authoritative server cards
- `schemas/` – JSON schemas (server_card, project_manifest)
- `templates/` – `claude.md` and installer templates
- `docs/` – ADRs and integration notes
- `scripts/` – verification utilities (guardrails)

See PRD: `../PRD.md`.

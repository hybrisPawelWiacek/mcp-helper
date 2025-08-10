# MCP-Helper Implementation Plan

Generated: 2025-08-10

## Overview
This plan outlines the completion of mcp-helper as a deployable NPM package with full server card coverage for all 17-18 standard MCP servers.

## Current Status (Updated 2025-01-10 END OF SESSION)

### ✅ COMPLETED
- **Slash Commands**: All 4 implemented (init, add, list, reconfigure)
- **Server Cards**: 13 of 18 complete (72%)
  - Original 8: perplexity-ask, brave-search, context7, serena, github-official, firecrawl, memory, sequentialthinking
  - New (5 of 10): postgres, slack, openmemory, atlassian, notion
- **NPM Package Structure**: Ready but not published

### 🚨 CRITICAL GAP - Custom Server Support (0%)
- **This was the 3rd original requirement!**
- **Plan Created**: See `CUSTOM_SERVER_PLAN.md`
- **Foundation Servers**: serena, sequentialthinking, context7 (required)
- **Next Todo**: #17 - Update minimum_servers.json

### 📋 TODO Next Session
1. **Start with Todo #17**: Update minimum_servers.json
2. **Follow CUSTOM_SERVER_PLAN.md**: 5-day implementation
3. **Then continue server cards**: puppeteer, playwright, etc.
4. **Finally publish NPM**: After custom support works

## Phase 1: Minimum Server Set Definition (NEEDS UPDATE)

### 🚨 UPDATE REQUIRED - Todo #17
Minimum servers must include:
- **serena** - Code analysis
- **sequentialthinking** - Planning
- **context7** - Documentation

### Objective
Define the minimum set of servers required for custom server support.

### Essential Servers
1. **serena** - Semantic code understanding for analyzing custom servers
2. **memory/openmemory** - Persist custom server configurations  
3. **perplexity-ask** - Research custom server documentation
4. **sequentialthinking** - Plan custom server integration
5. **github-official** - Access custom server repositories

### Implementation
- Create `catalog/minimum_servers.json`
- Add validation in mcp-helper init command
- Update documentation

## Phase 2: NPM Package Structure (✅ STRUCTURE COMPLETE, NOT PUBLISHED)

### Status
- Package name: @mcp/helper
- postinstall.js created with auto-setup
- bin/mcp-helper CLI wrapper implemented
- Ready for npm publish

### Package Structure
```
@mcp/helper/
├── package.json          # NPM metadata
├── postinstall.js        # Auto-setup script
├── bin/
│   └── mcp-helper       # CLI wrapper
├── slash-commands/       # Existing commands
├── lib/                  # Core libraries
├── catalog/
│   ├── server_cards/    # All server cards
│   └── minimum_servers.json
└── templates/           # CLAUDE.md template
```

### Key Features
- Global installation: `npm install -g @mcp/helper`
- Automatic Claude Code integration
- CLAUDE.md generation on install
- Memory protocol established for consistent status tracking
- PROJECT_STATUS_CURRENT entity for single source of truth
- Slash command registration

### Postinstall Actions
1. Detect Claude Code installation
2. Register `/mcp-helper` slash commands
3. Generate initial CLAUDE.md
4. Display quick start guide

## Phase 3: Tier 1 Server Cards (Day 2)

### High Priority Servers

#### postgres.json
- **Human**: 4/5 (Database inspection, query verification)
- **Agent**: 3/5 (Data operations, schema management)
- **Runtime**: Docker
- **Key Env**: POSTGRES_CONNECTION_STRING

#### slack.json  
- **Human**: 5/5 (Team notifications, collaboration)
- **Agent**: 2/5 (Automated notifications)
- **Runtime**: NPX
- **Key Env**: SLACK_BOT_TOKEN, SLACK_TEAM_ID

#### openmemory.json
- **Human**: 3/5 (Context review)
- **Agent**: 5/5 (Persistent memory alternative)
- **Runtime**: Docker
- **Key Env**: OPENAI_API_KEY

## Phase 4: Tier 2 Server Cards (Day 3)

### Important Integrations

#### atlassian.json
- **Human**: 4/5 (Project management)
- **Agent**: 3/5 (Issue automation)
- **Runtime**: Docker
- **Key Env**: JIRA_*, CONFLUENCE_*

#### notion.json
- **Human**: 4/5 (Documentation management)
- **Agent**: 3/5 (Content automation)
- **Runtime**: Docker
- **Key Env**: INTERNAL_INTEGRATION_TOKEN

#### puppeteer.json
- **Human**: 3/5 (Web testing)
- **Agent**: 4/5 (Browser automation)
- **Runtime**: NPX
- **Key Env**: None required

## Phase 5: Tier 3 Server Cards (Day 4)

### Specialized Servers

#### playwright.json
- Alternative to puppeteer
- Better cross-browser support
- **Runtime**: NPX

#### linkedin-mcp-server.json
- Professional networking
- **Runtime**: Docker
- **Key Env**: LINKEDIN_COOKIE

#### docker-mcp-toolkit.json
- Container management
- Memory service gateway
- **Runtime**: Docker

#### claude-code.json
- Meta server for Claude Code
- **Runtime**: NPX

## Implementation Tasks

### Immediate Actions
1. ✅ Save this plan to IMPLEMENTATION_PLAN.md
2. Create minimum_servers.json configuration
3. Research each server's actual requirements

### Research Needed
- Exact environment variables for each server
- Docker image names and tags
- NPX package names and versions
- Server-specific configuration options
- Integration patterns and best practices

### Testing Requirements
- Test each server card configuration
- Verify environment variable validation
- Test NPM package installation flow
- Validate postinstall script behavior

## Success Criteria
- All 18 servers have complete server cards
- NPM package installs cleanly with `npm install -g @mcp/helper`
- Postinstall script successfully:
  - Registers slash commands
  - Creates initial CLAUDE.md
  - Shows configuration instructions
- Minimum server set validation works
- All existing functionality preserved

## Risk Mitigation
- Research each server thoroughly before creating cards
- Test incrementally after each server card
- Maintain backward compatibility
- Create comprehensive error handling
- Document all assumptions

## Notes
- Use perplexity-ask and github-official to research server details
- Leverage serena for code analysis of existing implementations
- Save progress to memory at each milestone
- Follow agenticUsefulness rating patterns from existing cards
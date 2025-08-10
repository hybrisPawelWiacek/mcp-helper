# mcp-helper

A comprehensive toolkit for managing MCP (Model Context Protocol) servers, providing both a standalone CLI tool and future Claude Code slash command integration.

## 🎯 Overview

mcp-helper simplifies the discovery, installation, configuration, and management of MCP servers both globally and per project. It provides:

- **Standalone CLI Tool** (✅ Implemented): A command-line interface for managing MCP servers outside of Claude Code
- **Claude Code Slash Commands** (🚧 Planned): Native slash commands for use within Claude Code chat interface

## 📁 Project Structure

```
mcp-helper/
├── cli/                       # Standalone CLI implementation
│   ├── base-command.js       # Base command class with shared functionality
│   ├── router.js             # Command router and dispatcher
│   └── commands/             # Individual command implementations
├── slash-commands/           # Future Claude Code slash commands (planned)
├── lib/                      # Shared libraries
│   ├── config-manager.js     # Configuration management
│   ├── server-cards.js       # Server card operations
│   └── claude-md-generator.js # CLAUDE.md generation
├── catalog/                  # Server configurations
│   ├── server_cards/         # Individual server card JSON files
│   └── minimum_servers.json  # Foundation servers for custom support
├── schemas/                  # JSON schemas for validation
├── templates/                # Configuration templates
└── test/                     # Test suites
    └── e2e/                  # End-to-end tests
```

## 🚀 Installation

### As a Global CLI Tool

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/mcp-helper.git
cd mcp-helper

# Install dependencies
npm install

# Link globally (optional)
npm link
```

### For Development

```bash
# Install dependencies
npm install

# Run tests
npm test

# Run specific command
node bin/mcp-helper <command> [options]
```

## 💻 CLI Usage

The standalone CLI tool provides the following commands:

### Initialize a Project
```bash
mcp-helper init
```
Sets up MCP configuration for your project, detects environment, and creates necessary files.

### Add a Server
```bash
mcp-helper add <server-name>
```
Interactively configure and add an MCP server from the catalog.

### Add a Custom Server
```bash
mcp-helper add-custom
```
Add a custom MCP server not in the pre-defined catalog.

### List Servers
```bash
mcp-helper list
```
Display all configured servers with their status and ratings.

### Reconfigure a Server
```bash
mcp-helper reconfigure <server-name>
```
Modify the configuration of an existing server.

### Get Help
```bash
mcp-helper help
```
Show available commands and usage information.

## 🔮 Claude Code Slash Commands (Planned)

Future integration will allow these commands directly within Claude Code:

```
/mcp-helper init
/mcp-helper add github
/mcp-helper list
/mcp-helper reconfigure serena
/mcp-helper add-custom
```

These will work natively within the Claude Code chat interface, providing seamless MCP server management without leaving your conversation.

## 🧪 Testing

```bash
# Run all tests
npm test

# Run e2e tests specifically
node test/e2e/test-runner.js
```

## 📊 Server Ratings

Each MCP server is evaluated with two ratings:
- **Human Rating (1-5)**: Usefulness for human oversight and verification
- **AI Agent Rating (1-5)**: Importance for autonomous AI development tasks

## 🏗️ Architecture Decisions

### Two-Mode Operation
1. **CLI Mode**: Standalone tool for terminal usage
2. **Slash Command Mode**: Future integration for Claude Code chat interface

### Command Pattern
- Base command class provides shared functionality
- Router pattern for command dispatching
- Color-coded output for better UX
- Interactive prompts for configuration

### Configuration Management
- Global configuration in `~/.claude.json`
- Project-specific overrides in `.env`
- Environment variable placeholders for security

## 🤝 Contributing

Contributions are welcome! Please:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

MIT

## 🔗 Related

- [Product Requirements Document](../PRD.md)
- [Implementation Plan](IMPLEMENTATION_PLAN.md)
- [Custom Server Plan](CUSTOM_SERVER_PLAN.md)
- [Parent Repository CLAUDE.md](../../CLAUDE.md)

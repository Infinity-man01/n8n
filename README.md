# n8n Automation Project

This repository stores version-controlled [n8n](https://n8n.io/) automation workflows and the supporting material required to operate them.

## Prerequisites

- Node.js 20 or later
- An n8n instance for importing and running workflows

## Project layout

- `workflows/` — exported n8n workflow JSON files.
- `scripts/` — small Node.js utilities for workflow maintenance or deployment.
- `docs/` — operational and workflow documentation.
- `deployment/` — infrastructure and deployment configuration.

## Getting started

1. Copy or export an n8n workflow as JSON into `workflows/`.
2. Document its purpose, credentials, and operational notes in `docs/`.
3. Keep credentials and environment-specific values out of workflow exports and source control.
4. Import the workflow into n8n through its UI or your chosen deployment process.

## Node.js commands

No runtime dependencies are required for this scaffold. Run `npm run check` to verify the required project directories are present.

## Configuration and secrets

Do not commit credentials, webhook secrets, API tokens, or populated `.env` files. Record required variable names and setup steps in `docs/` instead.

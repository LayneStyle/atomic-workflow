# AtomicFlow

AtomicFlow is an AI-driven Agentic Workflow framework designed to solve massive projects by breaking them down into atomic, consistent, and independent stages.

Inspired by industry best practices, AtomicFlow ensures that your AI assistant maintains a "Zero Hallucination Context" by isolating your project state and documenting it retroactively.

## Installation

There are two ways to use AtomicFlow in your AI projects (Antigravity, Claude Code, etc.):

### Option 1: Run on the fly (No installation required)
Using `npx` will download the latest version temporarily and execute it:
```bash
npx atomic-workflow init
```

### Option 2: Install globally
If you want to use it often across many projects, install it globally on your machine:
```bash
npm install -g atomic-workflow
atomic-workflow init
```

### What does this do?
1. Creates the `.agent/skills/atomicflow` directory in your current project.
2. Extracts the orchestrator and sub-skills safely without affecting any existing skills (like `ag-kit`).
3. Leaves everything ready to use.

## Usage

Once installed, open a chat with your AI assistant inside the project directory and say:
> "Start a new project using AtomicFlow"

The AI will enter an **Onboarding Mode** where it will ask you a few setup questions (documentation language, AI verbosity, etc.) and will automatically load the `Planner`, `Implementer`, or `Debugger` profiles depending on your project's progress.

## Ecosystem Structure

When you initiate a project, the AI will create a `/.ai/` directory in your root folder with the following atomic structure:
- `00_config.json`: Your environment preferences.
- `00_master_index.md`: The roadmap and index of stages.
- `01_tech_stack.md`: Hard architectural rules and credentials.
- `02_estado_actual.md`: The high-level map of the built system.
- `/stages/`: Tasks to be completed, tracked via markdown checkboxes.
- `/implementations/`: Deep technical details of completed stages (including Mermaid diagrams).

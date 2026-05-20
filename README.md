# Atomic-Workflow

Atomic-Workflow is an AI-driven Agentic Workflow framework designed to solve massive projects by breaking them down into atomic, consistent, and independent stages.

Inspired by industry best practices, Atomic-Workflow ensures that your AI assistant maintains a **"Zero Hallucination Context"** by isolating your project state, anchoring the agent's attention, and documenting decisions retroactively.

## Core Philosophy

1. **Context Displacement Prevention (State Anchoring)**: AI models lose track of the big picture when debugging deep issues. Atomic-Workflow forces the AI to constantly re-read its "State Anchor" (`00_active_context.md`) to reorient itself before and after every task.
2. **Single Source of Truth (SSOT)**: The `/.ai/` directory is not a historical archive; it is the absolute current reality of the codebase. If the code changes, the documentation is rewritten.
3. **Self-Learning Ecosystem**: Bugs and their solutions are documented in an Error Log, creating a localized RAG system so the AI never makes the same mistake twice.

## Installation

There are two ways to use Atomic-Workflow in your AI projects (Antigravity, Claude Code, etc.):

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
1. Creates the `.agent/skills/atomic-workflow` directory in your current project.
2. Extracts the orchestrator and sub-skills safely without affecting any existing skills.
3. Leaves everything ready to use.

## Usage

Once installed, open a chat with your AI assistant inside the project directory and say:
> "Start a new project using Atomic-Workflow"

The AI will enter an **Onboarding Mode** where it will ask you setup questions and automatically route the work to the appropriate specialized sub-agent.

## The 10-Agent Ecosystem

Atomic-Workflow operates through a main Orchestrator that delegates tasks to 9 specialized sub-agents. Each agent has strict rules and "Return Hooks" to ensure they always hand control back to the Orchestrator.

1. **Orchestrator (`SKILL.md`)**: The autonomous manager that evaluates project state and routes to sub-skills.
2. **Designer**: Conducts product discovery, resolves documentation contradictions, and writes the `00_design_doc.md`.
3. **Planner**: Translates the design into a technical stack and a step-by-step roadmap (`00_master_index.md`).
4. **Diagram Architect**: Generates Mermaid diagrams (ERDs, Sequence, Architecture) to validate logic *before* code is written.
5. **Researcher (Spike Agent)**: Investigates unknown technologies, builds isolated prototypes, and writes integration guides to eliminate technical risk.
6. **UI/UX Specialist**: Focuses strictly on the frontend, design tokens, accessibility, and responsive interfaces.
7. **Implementer**: The senior engineer that writes the actual production code for the active stage.
8. **QA Tester**: The validator that writes tests and actively tries to break the Implementer's code before allowing progression.
9. **Debugger**: Resolves errors, fixes bugs, and ensures that if the architecture changes, the documentation is retroactively updated.
10. **Documenter**: The technical writer that maintains the Global State Map, the Context Index, and the Self-Learning Error Log.

## File Structure

When you initiate a project, the AI will create a `/.ai/` directory in your root folder with the following atomic structure:

- `00_config.json`: Your environment preferences.
- `00_active_context.md`: **The State Anchor**. The AI's short-term memory bookmark.
- `00_design_doc.md`: The confirmed product vision.
- `00_master_index.md`: The roadmap and index of stages.
- `01_tech_stack.md`: Hard architectural rules and credentials.
- `02_current_state.md`: The high-level map of the built system.
- `03_context_index.md`: Quick reference for variables, interfaces, and diagrams.
- `04_decision_log.md`: An append-only log of critical architectural decisions.
- `05_error_log.md`: **The Self-Learning Log**. Retroactive record of bugs and their exact fixes.
- `/stages/`: Tasks to be completed, tracked via markdown checkboxes.
- `/implementations/`: Deep technical details of completed stages.
- `/diagrams/`: Mermaid diagrams representing system logic.
- `/research/`: Technical spikes and integration guides.

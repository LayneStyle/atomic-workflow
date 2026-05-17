---
name: atomic-workflow
description: The main orchestrator of the Atomic-Workflow ecosystem. This skill delegates work to specialized sub-skills and loads contexts dynamically using python scripts.
---

# Atomic-Workflow Orchestrator

You are the Autonomous Manager of the Atomic-Workflow ecosystem. You do NOT write code directly from this file. Your only job is to evaluate the project state, interview the user if necessary, and load the correct sub-skill to perform the actual work.

## Initialization & Onboarding Mode
When you are invoked, your first action must be to check if `/.ai/00_config.json` exists in the workspace.
- **If it DOES NOT exist**: You must enter **Onboarding Mode**. Greet the user and ask them configuration questions (e.g., Documentation Language, AI Verbosity, Auto-commit). **CRUCIAL**: You must also ask: "Is this a brand new project, or an already existing project?". Once they answer, use your tools to create `/.ai/00_config.json` including a `"project_type": "greenfield"` or `"brownfield"` key. Then inform the user you are loading the Planner.
- **If it DOES exist**: Proceed to the Workflow Routing phase.

## Workflow Routing
Run `python scripts/load_context.py` to get the current state of the project.
Read the output and determine which scenario applies:

### Scenario A: Planning Phase
- **Condition**: There is no `00_master_index.md` or `01_tech_stack.md`.
- **Action**: Use your `view_file` tool to read `sub_skills/planner.md`. Strictly follow its instructions to design the architecture (Greenfield) or conduct an Architectural Audit & Assimilation (Brownfield).

### Scenario B: Implementation Phase
- **Condition**: The user has approved a stage and asked you to proceed, OR the `load_context.py` output shows an Active Stage with unchecked boxes `[ ]`.
- **Action**: Use your `view_file` tool to read `sub_skills/implementer.md` and execute the coding tasks. After completing the coding tasks, immediately read `sub_skills/documenter.md` to update the state and archive the implementation details.

### Scenario C: Debugging / Error Handling
- **Condition**: The user reports an error, bug, or test failure.
- **Action**: Use your `view_file` tool to read `sub_skills/debugger.md`. Follow its instructions to find context, fix the bug, and maintain retroactive consistency in the documentation.

## General Rules
- Always communicate with the user and write generated documents in the language defined in `00_config.json`.
- Do not skip the "pauses" defined in the sub-skills. The user must manually approve progression unless `auto_approve_stages` is set to true.
- Treat the `/.ai/` directory as the absolute source of truth.

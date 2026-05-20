import os
import json
import glob

def load_context():
    ai_dir = ".ai"
    if not os.path.exists(ai_dir):
        print("ERROR: /.ai/ directory not found. Are we in a new project?")
        return

    # Load Config
    config_path = os.path.join(ai_dir, "00_config.json")
    if os.path.exists(config_path):
        print("--- CONFIGURATION ---")
        with open(config_path, "r", encoding="utf-8") as f:
            print(f.read())
            print("\n")

    # Load Tech Stack
    tech_stack_path = os.path.join(ai_dir, "01_tech_stack.md")
    if os.path.exists(tech_stack_path):
        print("--- TECH STACK ---")
        with open(tech_stack_path, "r", encoding="utf-8") as f:
            print(f.read())
            print("\n")

    # Load Current State
    current_state_path = os.path.join(ai_dir, "02_current_state.md")
    if os.path.exists(current_state_path):
        print("--- CURRENT STATE (Global Map) ---")
        with open(current_state_path, "r", encoding="utf-8") as f:
            print(f.read())
            print("\n")

    # Find the active stage
    stages_dir = os.path.join(ai_dir, "stages")
    if os.path.exists(stages_dir):
        stage_files = sorted(glob.glob(os.path.join(stages_dir, "stage_*.md")))
        active_stage = None
        active_stage_content = ""

        for file_path in stage_files:
            with open(file_path, "r", encoding="utf-8") as f:
                content = f.read()
                # Find the first file that has an unchecked checkbox
                if "- [ ]" in content:
                    active_stage = file_path
                    active_stage_content = content
                    break
        
        if active_stage:
            print(f"--- ACTIVE STAGE: {os.path.basename(active_stage)} ---")
            print(active_stage_content)
        else:
            print("--- ACTIVE STAGE ---")
            print("No active stages found. All stages are completed or no stages exist.")

if __name__ == "__main__":
    load_context()

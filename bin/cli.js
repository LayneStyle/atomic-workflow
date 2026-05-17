#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Target directory where the user ran `npx atomic-workflow init`
const targetDir = process.cwd();
const agentSkillsDir = path.join(targetDir, '.agent', 'skills');
const atomicFlowDir = path.join(agentSkillsDir, 'atomic-workflow');

// Source directory (where this npm package is installed)
const sourceDir = path.join(__dirname, '..', 'template');

function copyFolderSync(from, to) {
    if (!fs.existsSync(to)) {
        fs.mkdirSync(to, { recursive: true });
    }
    const elements = fs.readdirSync(from);
    for (const element of elements) {
        const fromPath = path.join(from, element);
        const toPath = path.join(to, element);
        
        if (fs.lstatSync(fromPath).isDirectory()) {
            copyFolderSync(fromPath, toPath);
        } else {
            fs.copyFileSync(fromPath, toPath);
        }
    }
}

async function run() {
    const args = process.argv.slice(2);
    const command = args[0];

    if (command === 'init') {
        console.log('⚡ Initializing AtomicFlow in your project...');
        
        try {
            // 1. Create .agent/skills/ if it doesn't exist (safe, doesn't overwrite)
            if (!fs.existsSync(agentSkillsDir)) {
                fs.mkdirSync(agentSkillsDir, { recursive: true });
            }

            // 2. Clear ONLY the atomic-workflow folder if it exists (for clean updates)
            if (fs.existsSync(atomicFlowDir)) {
                console.log('🔄 Updating existing AtomicFlow installation...');
                fs.rmSync(atomicFlowDir, { recursive: true, force: true });
            }

            // 3. Copy the template files into .agent/skills/atomic-workflow
            copyFolderSync(sourceDir, atomicFlowDir);

            console.log('✅ AtomicFlow installed successfully!');
            console.log('📂 Location: .agent/skills/atomic-workflow/');
            console.log('🚀 Next Step: Open a chat with your AI assistant and say: "Start a new project"');

        } catch (error) {
            console.error('❌ Failed to install AtomicFlow:', error.message);
            process.exit(1);
        }
    } else {
        console.log('AtomicFlow CLI');
        console.log('Usage: npx atomic-workflow init');
    }
}

run();

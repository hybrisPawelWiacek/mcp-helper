#!/usr/bin/env node
import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Simple test to read PROJECT_STATUS.json
async function test() {
  try {
    const statusPath = path.join(__dirname, 'PROJECT_STATUS.json');
    const status = await fs.readJson(statusPath);
    
    console.log('Project Status:');
    console.log('- Project:', status.project);
    console.log('- Overall:', status.overall_completion + '%');
    console.log('- Features:');
    for (const [key, feature] of Object.entries(status.features)) {
      console.log(`  * ${feature.name}: ${feature.completion}%`);
    }
    
    // Now test template generation
    const HandlebarsModule = await import('handlebars');
    const Handlebars = HandlebarsModule.default;
    
    const templatePath = path.join(__dirname, 'templates', 'claude.md.hbs');
    const templateContent = await fs.readFile(templatePath, 'utf-8');
    const template = Handlebars.compile(templateContent);
    
    // Minimal data for testing
    const data = {
      generatedAt: new Date().toISOString(),
      projectPath: __dirname,
      projectStatus: status,
      servers: [],
      requiredEnvVars: [],
      agenticRatings: {
        highAgentValue: [],
        highHumanValue: [],
        balanced: []
      },
      mcpUsageProtocol: {
        primaryTools: [],
        fallbackStrategy: []
      },
      categories: [],
      essentialServers: {
        forAgents: [],
        forHumans: []
      },
      globalServers: [],
      projectServers: []
    };
    
    const output = template(data);
    
    // Check if status appears in output
    if (output.includes('Project Status: mcp-helper')) {
      console.log('\n✅ Template includes project status!');
      
      // Show first few lines
      const lines = output.split('\n').slice(0, 30);
      console.log('\nFirst 30 lines of generated CLAUDE.md:');
      console.log('=' .repeat(50));
      console.log(lines.join('\n'));
      console.log('=' .repeat(50));
    } else {
      console.log('\n❌ Template does not include project status');
    }
    
  } catch (error) {
    console.error('Error:', error.message);
    console.error(error.stack);
  }
}

test();
import fs from 'fs';
import { pathToFileURL } from 'url';

const [, , pluginPath] = process.argv;

if (!pluginPath) {
  console.error('Usage: node test-missing-skill-mock.mjs PLUGIN_PATH');
  process.exit(2);
}

const originalExistsSync = fs.existsSync;
let checkedExists = false;

fs.existsSync = function (...args) {
  if (String(args[0]).replaceAll('\\', '/').includes('using-superpowers/SKILL.md')) {
    checkedExists = true;
    return false;
  }
  return originalExistsSync.apply(this, args);
};

const mod = await import(pathToFileURL(pluginPath).href);
const plugin = await mod.SuperpowersPlugin({ client: {}, directory: '.' });
const transform = plugin['experimental.chat.messages.transform'];

const output = {
  messages: [{
    info: { role: 'user' },
    parts: [{ type: 'text', text: 'Original message part' }],
  }],
};

await transform({}, output);

const failures = [];

if (!checkedExists) {
  failures.push('expected fs.existsSync to be called with the skill path');
}

const parts = output.messages[0].parts;
if (parts.length !== 1) {
  failures.push(`expected output to remain unchanged (1 part), got ${parts.length} parts`);
} else if (parts[0].text !== 'Original message part') {
  failures.push(`expected output text to remain unchanged, got "${parts[0].text}"`);
}

if (failures.length > 0) {
  console.error('Test Failed:');
  for (const failure of failures) {
    console.error(`FAIL: ${failure}`);
  }
  process.exit(1);
}

console.log('Test Passed: Missing skill path behaves correctly (returns null and doesn\'t modify output)');

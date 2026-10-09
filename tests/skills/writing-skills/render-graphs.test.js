import assert from 'assert';
import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function test() {
  const scriptPath = path.join(__dirname, '../../../skills/writing-skills/render-graphs.js');
  const scriptContent = fs.readFileSync(scriptPath, 'utf8');

  const modifiedContent = scriptContent
    .replace(/const fs = require\('fs'\);/g, "import fs from 'fs';")
    .replace(/const path = require\('path'\);/g, "import path from 'path';")
    .replace(/const \{ execSync \} = require\('child_process'\);/g, `
    const { execSync } = (function() {
      return {
        execSync: (cmd, opts) => {
          if (cmd === 'dot -Tsvg' && opts && opts.input === 'error_trigger') {
            const err = new Error('Command failed');
            err.stderr = Buffer.from('mock stderr output');
            throw err;
          }
          return 'mock success output';
        }
      };
    })();
    `)
    .replace(/^main\(\);/m, `
export { renderToSvg };
`);

  const tempId = crypto.randomBytes(4).toString('hex');
  const tempScriptPath = path.join(__dirname, 'render-graphs-temp-' + tempId + '.js');

  fs.writeFileSync(tempScriptPath, modifiedContent);

  try {
    const module = await import('./render-graphs-temp-' + tempId + '.js');
    const renderToSvg = module.renderToSvg;

    let passed = 0;
    let failed = 0;

    function runTest(name, fn) {
      try {
        fn();
        console.log('  PASS: ' + name);
        passed++;
      } catch (err) {
        console.error('  FAIL: ' + name);
        console.error(err);
        failed++;
      }
    }

    console.log('\n--- renderToSvg ---');

    runTest('returns null and logs error when execSync throws', () => {
      const originalConsoleError = console.error;
      let errorLogged = false;
      let stderrLogged = false;
      console.error = (msg, arg) => {
        if (typeof msg === 'string' && msg.includes('Error running dot:')) {
          errorLogged = true;
        }
        if (msg === 'mock stderr output' || arg === 'mock stderr output' || (arg && arg.toString && arg.toString() === 'mock stderr output')) {
          stderrLogged = true;
        }
      };

      const result = renderToSvg('error_trigger');

      console.error = originalConsoleError;

      assert.strictEqual(result, null, 'Should return null on failure');
      assert.strictEqual(errorLogged, true, 'Should log the error message');
      assert.strictEqual(stderrLogged, true, 'Should log stderr if available');
    });

    console.log('\n--- Results: ' + passed + ' passed, ' + failed + ' failed ---');
    if (failed > 0) process.exit(1);

  } finally {
    fs.unlinkSync(tempScriptPath);
  }
}

test().catch(err => {
  console.error("Test failed:", err);
  process.exit(1);
});

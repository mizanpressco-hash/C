import assert from 'assert';
import { extractDotBlocks } from '../../skills/writing-skills/render-graphs.js';

const test = async (name, fn) => {
  try {
    await fn();
    console.log(`✅ ${name}`);
  } catch (err) {
    console.error(`❌ ${name}`);
    console.error(err);
    process.exitCode = 1;
  }
};

test('extractDotBlocks returns empty array for markdown without dot blocks', () => {
  const markdown = `# Hello World

  This is some markdown.

  \`\`\`javascript
  console.log("No dot block here!");
  \`\`\`
  `;

  const result = extractDotBlocks(markdown);
  assert.deepStrictEqual(result, []);
});

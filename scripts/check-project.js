const { existsSync } = require('node:fs');
const { resolve } = require('node:path');

const requiredDirectories = ['workflows', 'scripts', 'docs', 'deployment'];
const missingDirectories = requiredDirectories.filter(
  (directory) => !existsSync(resolve(__dirname, '..', directory)),
);

if (missingDirectories.length > 0) {
  console.error(`Missing required directories: ${missingDirectories.join(', ')}`);
  process.exitCode = 1;
} else {
  console.log('Project structure check passed.');
}

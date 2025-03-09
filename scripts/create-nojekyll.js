const fs = require('fs');
const path = require('path');

const outDir = path.join(process.cwd(), 'out');
const nojekyllPath = path.join(outDir, '.nojekyll');

// Ensure the out directory exists
if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
}

// Create .nojekyll file
fs.writeFileSync(nojekyllPath, ''); 
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function copyDir(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }
  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (let entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

const docsPublic = path.resolve(__dirname, '../docs/public');
fs.mkdirSync(path.join(docsPublic, 'logos'), { recursive: true });
fs.mkdirSync(path.join(docsPublic, 'speedtests'), { recursive: true });
fs.mkdirSync(path.join(docsPublic, 'unlocks'), { recursive: true });

copyDir('C:/Users/Pro User/Desktop/logos', path.join(docsPublic, 'logos'));
copyDir('C:/Users/Pro User/Desktop/机场品牌信息/extracted', path.join(docsPublic, 'speedtests'));
copyDir('C:/Users/Pro User/Desktop/机场品牌信息/光速云测试图解锁图', path.join(docsPublic, 'unlocks'));

console.log('Assets copied successfully to docs/public/');

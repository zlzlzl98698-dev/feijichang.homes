import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.resolve(__dirname, '../docs/.vitepress/dist');
const primaryPort = 4180;

process.on('uncaughtException', (err) => {
  console.error('Caught exception:', err.message);
});

process.on('unhandledRejection', (err) => {
  console.error('Unhandled rejection:', err);
});

const mimeTypes = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.txt': 'text/plain; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8'
};

function createServer() {
  return http.createServer((req, res) => {
    req.on('error', (err) => {
      console.error('Request error:', err.message);
    });
    res.on('error', (err) => {
      console.error('Response error:', err.message);
    });

    try {
      let reqPath = decodeURI(req.url.split('?')[0]);
      let filePath = path.join(distDir, reqPath);

      // If path is directory or ends with /, look for index.html
      if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
        filePath = path.join(filePath, 'index.html');
      }

      // If file doesn't exist, try adding .html (clean URLs)
      if (!fs.existsSync(filePath) && fs.existsSync(filePath + '.html')) {
        filePath = filePath + '.html';
      }

      if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
        const ext = path.extname(filePath).toLowerCase();
        const contentType = mimeTypes[ext] || 'application/octet-stream';
        res.writeHead(200, { 'Content-Type': contentType });
        const stream = fs.createReadStream(filePath);
        stream.on('error', () => {
          if (!res.headersSent) {
            res.writeHead(500);
            res.end();
          }
        });
        stream.pipe(res);
      } else {
        const notFoundPage = path.join(distDir, '404.html');
        if (fs.existsSync(notFoundPage)) {
          res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
          const stream = fs.createReadStream(notFoundPage);
          stream.on('error', () => {
            if (!res.headersSent) {
              res.writeHead(404);
              res.end('404 Not Found');
            }
          });
          stream.pipe(res);
        } else {
          res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
          res.end('404 Not Found');
        }
      }
    } catch (err) {
      if (!res.headersSent) {
        res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end('Internal Server Error');
      }
    }
  });
}

function startServer(port) {
  const server = createServer();
  server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      console.warn(`Port ${port} in use, trying next port ${port + 1}...`);
      startServer(port + 1);
    } else {
      console.error('Server error:', err);
    }
  });
  server.listen(port, () => {
    console.log(`飞机场 (feijichang.homes) 本地稳定预览服务已启动：http://localhost:${port}/`);
  });
}

startServer(primaryPort);

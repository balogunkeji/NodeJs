import http from 'http';
import fs from 'fs/promises'; // <== use the promises API
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = process.env.PORT || 8080;

const server = http.createServer(async (req, res) => {
    try {
        if (req.method === 'GET') {
            let filePath;

            if (req.url === '/' || req.url === '/about') {
                filePath = path.join(__dirname, '/public/index.html');
            } else {
                res.writeHead(404, { 'Content-Type': 'text/html' });
                res.end('<h1>404 Not Found</h1>');
                return;
            }

            const data = await fs.readFile(filePath, 'utf-8');
            res.setHeader('Content-Type', 'text/html; charset=utf-8');
            res.writeHead(200);
            res.end(data);

        } else {
            throw new Error('Invalid Request');
        }
    } catch (error) {
        res.writeHead(500, { 'Content-Type': 'text/html' });
        res.end('<h1>Server Error</h1>');
    }
});

server.listen(PORT, () => {
    console.info(`Server listening on http://localhost:${PORT}`);
});

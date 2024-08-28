const http = require('http');
const fs = require('fs');

// Create an HTTP server
const server = http.createServer((req, res) => {
    // Home Page
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('This is the Home Page\n');
    }
    // About Page
    else if (req.url === '/about') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('This is the About Page\n');
    }
    // Contact Page
    else if (req.url === '/contact') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('This is the Contact Page\n');
    }
    // File Write Operation
    else if (req.url === '/file-write') {
        fs.writeFile('demo.txt', 'hello world', (err) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Failed to write file\n');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/plain' });
                res.end('File written successfully: demo.txt\n');
            }
        });
    }
    // Handle 404 for other routes
    else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Page Not Found\n');
    }
});

// The server listens on port 5500
const PORT = 5501;
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});

const http = require('http');

const port = 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('✅ Hello from AKS - SUCCESS');
});

server.listen(port, '0.0.0.0', () => {
    console.log(`Server running on port ${port}`);
});

// ✅ THIS LINE FIXES YOUR ISSUE
setInterval(() => {
    console.log("App is running...");
}, 5000);
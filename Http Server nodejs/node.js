const http = require('http');

const server = http.createServer((req, res) => {
    // Set the response HTTP header with HTTP status and Content type
    res.writeHead(200, { 'Content-Type': 'application/json' });
    
    // Create a JSON object
    const responseBody = {
        message: 'Hello, World!',
        timestamp: new Date()
    };
    
    // Send the response body as JSON
    res.end(JSON.stringify(responseBody));
});

// The server listens on port 3000
server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});

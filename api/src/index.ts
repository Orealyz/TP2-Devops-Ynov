import { createServer, IncomingMessage, ServerResponse } from 'http';

const PORT = process.env.PING_LISTEN_PORT ? parseInt(process.env.PING_LISTEN_PORT, 10) : 3000;

const server = createServer((req: IncomingMessage, res: ServerResponse) => {
    if (req.method === 'GET' && req.url === '/ping') {
        const responseData = {
            status: "success",
            message: "LET'S GOOOOOO",
            timestamp: new Date().toISOString(),
            yourIP: req.socket.remoteAddress,
            headers: req.headers,
        };
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(responseData, null, 2));
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    }
});

server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});

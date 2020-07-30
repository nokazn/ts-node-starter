import http, { IncomingMessage, ServerResponse } from 'http';

const listener = (_req: IncomingMessage, res: ServerResponse) => {
  res.writeHead(200);
  res.end('Hello World!');
};

const server = http.createServer(listener);
server.listen(8000);

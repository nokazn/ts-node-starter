import http, { IncomingMessage, ServerResponse } from 'http';
import dotenv from 'dotenv';

dotenv.config();

const { PORT } = process.env;
if (PORT == null) {
  console.error({
    env: process.env,
    PORT,
  });
  throw new Error('Environmental variables are not set.');
}

const listener = (_req: IncomingMessage, res: ServerResponse) => {
  res.writeHead(200);
  res.end('Hello World!');
};

const server = http.createServer(listener);
console.log(`The http server is listening at port: ${PORT} 🚀`);

server.listen(parseInt(PORT, 10));

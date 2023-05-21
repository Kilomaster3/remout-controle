import { createWebSocketStream, WebSocket, WebSocketServer } from 'ws';
import { httpServer } from './src/http_server/index';
import { handler } from './src/handler';
import internal from 'stream';

import 'dotenv/config';

const HTTP_PORT: number = Number(process.env.PORT) || 3000;
httpServer.listen(HTTP_PORT);

console.log(`Start static http server on the ${HTTP_PORT} port`);

const server = new WebSocketServer({ port: 8080 });

server.on('connection', (socket: WebSocket) => {
  const stream: internal.Duplex = createWebSocketStream(socket, {
    encoding: 'utf8',
    decodeStrings: false,
  });

  stream.on('data', (command) => {
    handler(stream, command);
  });
});

import Jimp from 'jimp';
import robot from 'robotjs';
import { WebSocketServer } from 'ws';
import { httpServer } from './src/http_server/index';

const HTTP_PORT = 3000;

console.log(`Start static http server on the ${HTTP_PORT} port!`);
httpServer.listen(HTTP_PORT);

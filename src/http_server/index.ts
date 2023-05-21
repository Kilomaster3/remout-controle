import * as fs from 'fs';
import * as path from 'path';
import * as http from 'http';

export const httpServer = http.createServer((req, res) => {
  const __dirname = path.resolve(path.dirname(''));
  const FILE_PATH = __dirname + (req.url === '/' ? '/front/index.html' : `/front${req.url}`);
  fs.readFile(FILE_PATH, (err, data) => {
    if (err) {
      res.writeHead(404);
      res.end(JSON.stringify(err));
      return;
    }
    res.writeHead(200);
    res.end(data);
  });
});

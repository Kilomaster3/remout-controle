import robot from 'robotjs';
import Jimp from 'jimp';
import internal from 'stream';
import { errorHandler } from '../utils/errorHandler';

export const printScreen = async (socket: internal.Duplex) => {
  try {
    const { x, y } = robot.getMousePos();
    const size = 100;

    const bigMap = robot.screen.capture(x - size, y - size, size * 2, size * 2);
    const image = new Jimp(size * 2, size * 2);

    image.bitmap.data = Buffer.from(bigMap.image);

    const base64 = await image.getBase64Async(Jimp.MIME_PNG);

    socket.write(`prnt_scrn ${base64}`);
  } catch (err) {
    errorHandler(err);
  }
};

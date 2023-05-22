import robot from 'robotjs';
import internal from 'stream';
import { errorHandler } from '../utils/errorHandler';

export const up = (offset: number, socket: internal.Duplex) => {
  try {
    const { x, y } = robot.getMousePos();

    robot.moveMouse(x, y - offset);
    socket.write('mouse_up');
  } catch (err) {
    errorHandler(err);
  }
};

export const down = (offset: number, socket: internal.Duplex) => {
  try {
    const { x, y } = robot.getMousePos();

    robot.moveMouse(x, y + offset);
    socket.write('mouse_down');
  } catch (err) {
    errorHandler(err);
  }
};

export const left = (offset: number, socket: internal.Duplex) => {
  try {
    const { x, y } = robot.getMousePos();

    robot.moveMouse(x - offset, y);
    socket.write('mouse_left');
  } catch (err) {
    errorHandler(err);
  }
};

export const right = (offset: number, socket: internal.Duplex) => {
  try {
    const { x, y } = robot.getMousePos();

    robot.moveMouse(x + offset, y);
    socket.write('mouse_right');
  } catch (err) {
    errorHandler(err);
  }
};

export const position = (socket: internal.Duplex) => {
  try {
    const { x, y } = robot.getMousePos();

    socket.write(`mouse_position ${x},${y}`);
  } catch (err) {
    errorHandler(err);
  }
};

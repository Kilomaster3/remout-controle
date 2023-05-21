import robot from 'robotjs';
import internal from 'stream';

export const up = (offset: number, socket: internal.Duplex) => {
  const { x, y } = robot.getMousePos();

  robot.moveMouse(x, y - offset);
  socket.write('mouse_up');
};

export const down = (offset: number, socket: internal.Duplex) => {
  const { x, y } = robot.getMousePos();

  robot.moveMouse(x, y + offset);
  socket.write('mouse_down');
};

export const left = (offset: number, socket: internal.Duplex) => {
  const { x, y } = robot.getMousePos();

  robot.moveMouse(x - offset, y);
  socket.write('mouse_left');
};

export const right = (offset: number, socket: internal.Duplex) => {
  const { x, y } = robot.getMousePos();

  robot.moveMouse(x + offset, y);
  socket.write('mouse_right');
};

export const position = (socket: internal.Duplex) => {
  const { x, y } = robot.getMousePos();

  socket.write(`mouse_position ${x},${y}`);
};

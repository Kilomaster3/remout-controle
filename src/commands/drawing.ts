import robot from 'robotjs';
import internal from 'stream';
import { errorHandler } from '../utils/errorHandler';

export const circle = (radius: number, socket: internal.Duplex) => {
  try {
    const mousePos = robot.getMousePos();

    socket.write(`draw_circle`);
    robot.mouseToggle('down');

    for (let angle = 0; angle <= Math.PI * 2; angle += 0.02) {
      const x = mousePos.x + radius * Math.cos(angle);
      const y = mousePos.y + radius * Math.sin(angle);
      robot.moveMouse(x, y);
    }
    robot.mouseToggle('up');
  } catch (err) {
    errorHandler(err);
  }
};

export const rectangle = (
  width: number,
  length: number,
  socket: internal.Duplex
) => {
  try {
    const mousePos = robot.getMousePos();

    socket.write(`draw_rectangle`);
    robot.mouseToggle('down');

    const drawLine = (x: number, y: number, dx: number, dy: number) => {
      for (let i = 0; i <= dx; i++) {
        const newX = mousePos.x + x + i;
        const newY = mousePos.y + y + dy;
        robot.dragMouse(newX, newY);
      }
    };

    drawLine(0, 0, width, 0); // Top line
    drawLine(width, 0, 0, length); // Right line
    drawLine(0, length, -width, 0); // Bottom line
    drawLine(0, 0, 0, -length); // Left line

    robot.mouseToggle('up');
  } catch (err) {
    errorHandler(err);
  }
};

export const square = (width: number, socket: internal.Duplex) => {
  try {
    const mousePos = robot.getMousePos();

    socket.write(`draw_square`);
    robot.mouseToggle('down');

    const drawLine = (x: number, y: number, dx: number, dy: number) => {
      for (let i = 0; i <= dx; i++) {
        const newX = mousePos.x + x + i;
        const newY = mousePos.y + y + dy;
        robot.dragMouse(newX, newY);
      }
    };

    const drawSquare = (x: number, y: number, side: number) => {
      drawLine(x, y, side, 0); // Top line
      drawLine(x + side, y, 0, side); // Right line
      drawLine(x, y + side, -side, 0); // Bottom line
      drawLine(x, y, 0, -side); // Left line
    };

    drawSquare(0, 0, width);

    robot.mouseToggle('up');
  } catch (err) {
    errorHandler(err);
  }
};

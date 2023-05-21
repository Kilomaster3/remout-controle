import internal from 'stream';

import { down, left, position, right, up } from './commands/actions';
import { circle, rectangle, square } from './commands/drawing';
import { printScreen } from './commands/print-screen';

export const handler = (stream: internal.Duplex, command: string) => {
  const args = command.split(' ');

  switch (args[0]) {
    case 'mouse_up':
      up(Number(args[1]), stream);
      break;
    case 'mouse_down':
      down(Number(args[1]), stream);
      break;
    case 'mouse_left':
      left(Number(args[1]), stream);
      break;
    case 'mouse_right':
      right(Number(args[1]), stream);
      break;
    case 'mouse_position':
      position(stream);
      break;
    case 'draw_circle':
      circle(Number(args[1]), stream);
      break;
    case 'draw_rectangle':
      rectangle(Number(args[1]), Number(args[2]), stream);
      break;
    case 'draw_square':
      square(Number(args[1]), stream);
      break;
    case 'prnt_scrn':
      printScreen(stream);
      break;
  }
};

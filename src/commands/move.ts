import robot from 'robotjs';

export const moveMouse = (action, x, y, value) => {
  switch (action) {
    case 'mouse_up':
      robot.moveMouse(x, y - Number(value[0]));
      break;
    case 'mouse_down':
      robot.moveMouse(x, y + Number(value[0]));
      break;
    case 'mouse_left':
      robot.moveMouse(x - Number(value[0]), y);
      break;
    case 'mouse_right':
      robot.moveMouse(x + Number(value[0]), y);
      break;
    case 'mouse_position':
      robot.moveMouse(x, y);
      break;
  }
};

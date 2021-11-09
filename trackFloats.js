const finalPosition = function (moves) {
  let x = 0;
  let y = 0;
  for(let dir of moves) {
    switch(dir) {
      case "north":
        y++;
        break;
      case "west":
        x--;
        break;
      case "east":
        x++;
        break;
      case "south":
        y--;
    }
  }
  return [x, y];
}
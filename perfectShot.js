const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  

const finalPosition = function(moves){
  const currentPosition = [0,0];
  for (move of moves){
    switch(move){
    case 'north':
      currentPosition[1] += 1;
      break;
    case 'south':
      currentPosition[1] -= 1;
      break;
    case 'east':
      currentPosition[0] += 1;
      break;
    case 'west':
      currentPosition[0] -= 1;
      break;
    }
  }
  return currentPosition;
}

console.log(finalPosition(moves));
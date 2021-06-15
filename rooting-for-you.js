const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 6,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 3,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 8,
    plumpness: 3
  }
]

const judgeVegetable = function (vegetables, metric) {
  let winner;
  let highestScore = 0;
  for(veg of vegetables){
    if(veg[metric] >= highestScore){
      highestScore = veg[metric];
      winner = veg['submitter'];
    }
  }
  return winner;
}

console.log(judgeVegetable(vegetables, 'redness'));
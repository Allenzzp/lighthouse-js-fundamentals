const judgeVegetable = function (veggies, char) {
  let winner = "";
  let max = 0;
  veggies.forEach(function (veg) {
    if(veg[char] > max) {
      max = veg[char];
      winner = veg.submitter;
    }
  });
  return winner;
};

// const vegetables = [
//   {
//     submitter: 'Old Man Franklin',
//     redness: 10,
//     plumpness: 5
//   },
//   {
//     submitter: 'Sally Tomato-Grower',
//     redness: 2,
//     plumpness: 8
//   },
//   {
//     submitter: 'Hamid Hamidson',
//     redness: 4,
//     plumpness: 3
//   }
// ]

// const metric = 'redness'

// console.log(judgeVegetable(vegetables, metric));
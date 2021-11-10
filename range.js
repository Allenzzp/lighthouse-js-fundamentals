const range = function (start, end, step) {
  let res = [];
  if((start === undefined || end === undefined || step === undefined) || (start >= end) || (step <= 0)) {
    return res;
  }else {
    for(let i = start; i <= end; i += step) {
      res.push(i);
    }
  }
  return res;
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));
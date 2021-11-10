const loopyLighthouse = function (range, multiples, words) {
  let str = range[0];
  let end = range[1];

  for(; str <= end; str++) {
    if(str % multiples[0] === 0 && str % multiples[1] === 0) {
      console.log(words[0] + words[1]);
    } else if (str % multiples[0] === 0) {
      console.log(words[0]);
    } else if (str % multiples[1] === 0) {
      console.log(words[1]);
    } else {
      console.log(str);
    }
  }
};
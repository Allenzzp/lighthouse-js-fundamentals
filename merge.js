function merge (arr1, arr2) {
  if(arr1.length === 0) {
    return arr2;
  }else if(arr2.length === 0) {
    return arr1;
  }else {
    let res = [];
    let i;
    let j;
    for(i = 0, j = 0; i < arr1.length && j < arr2.length; ) {
      if(arr1[i] < arr2[j]) {
        res.push(arr1[i]);
        i++;
      }else if (arr1[i] > arr2[j]) {
        res.push(arr2[j]);
        j++;
      }else {
        res.push(arr1[i]);
        res.push(arr2[j]);
        i++;
        j++;
      }
    }

    if(i !== arr1.length) {
      for(; i < arr1.length; i++) {
        res.push(arr1[i]);
      }
    }
    if(j !== arr2.length) {
      for(; j < arr2.length; j++) {
        res.push(arr2[j]);
      }
    }

    return res;
  }
}

console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);
console.log(merge([ 4 ], [ 2, 5, 8 ]), "=?", [ 2, 4, 5, 8 ]);
console.log(merge([ 1, 2, 6 ], []), "=?", [ 1, 2, 6 ]);
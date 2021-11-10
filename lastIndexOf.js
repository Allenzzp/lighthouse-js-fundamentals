const lastIndexOf = function (arr, tar) {
  let ans = -1;
  for (let i = arr.length - 1; i >= 0; i--) {
    if(arr[i] === tar) {
      ans = i;
      break;
    }
  }
  return ans;
};
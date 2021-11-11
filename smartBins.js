const smartGarbage = function (trash, bins) {
  switch (trash) {
    case "waste":
      bins.waste++;
      break;
    case "recycling":
      bins.recycling++;
      break;
    case "compost":
      bins.compost++;
  }

  return bins;
};
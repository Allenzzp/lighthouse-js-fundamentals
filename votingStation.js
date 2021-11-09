const chooseStations = function (stations){
  let target = [];
  for(let i = 0; i < stations.length; i++){
    if((stations[i][1] >= 20) && (stations[i][2] === "school" || stations[i][2] === "community centre")) {
      target.push(stations[i][0]);
    }
  }
  return target;
}
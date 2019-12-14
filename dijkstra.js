function nightRoute(city) {
  var INF = 1000000000;
  var n = city.length;
  //console.log("Length: " + n);

  for (var i = 0; i < n; i++)
      for (var j = 0; j < n; j++)
          if (city[i][j] == -1) city[i][j] = INF;

  var d = [n];
  var v = [n];

  for (var i = 0; i < n; i++)
      d[i] = city[0][i];

  v[0] = true;

  for (var i = 0; i < n - 2; i++){
      var current = getSmalllIndex(d, v);
      v[current] = true;
      //console.log("i: " + i + ", current: " + current);
      for (var j = 0; j < n; j++){
          console.log("v[" + j + "]: " + v[j]);
          if (v[j] != true){
              //console.log("d[" + j + "]: " + d[j]);
              //console.log("d[" + current + "]: " + d[current]);
              //console.log("city[" + current + "][" + j + "]: " + city[current][j]);

              if(d[current] + city[current][j] < d[j]){
                  d[j] = d[current] + city[current][j];
                  //console.log(i + ", " + j + ": " + d[j]);
              }
          }
      }
  }
  
  return d[n - 1];
}

function getSmalllIndex(Distance, Visited) {
  var Min = 1000000000;
  var index = 0;
  for (var i = 0; i < Distance.length; i++)
      if (Distance[i] < Min && !Visited[i]){
          Min = Distance[i];
          index = i;
      }

  return index;
}
const fetch = require('node-fetch');

stations = ['Cantley', 'Oxford'];

const closestStations = async (stations) => {
  const _Id = `e715b77a`;
  const _Key = `577e6bd7676dfeae5e92f6e82c3a380b`;
  const val = await stations.map(async (station) => {
    let url = `http://transportapi.com/v3/uk/places.json?query=${station}&type=train_station&app_id=${_Id}&app_key=${_Key}`;
    const res = await fetch(url);
    let data = await res.json();

    return data.memeber[0];
  });
  const res = await Promise.all(val);

  const arr = res.map(function (d, i) {
    if (i + 1 < res.length) {
      Math.sqrt(
        Math.pow(d[i].latitude - d[i + 1].latitude, 2) +
          Math.pow(d[i].longitude - d[i + 1].longitude, 2)
      );
    }
  });
  console.log(arr);
  return Math.min(...arr);
};

closestStations(stations).then((data) => {
  data;
});

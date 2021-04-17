//Iterating over Typescript Map
/* Map.prototype.forEach((value, key, map) => void, thisArg?) : void */

const myMap = { key1: true, key2: false };

/* myMap.forEach((value: boolean, key: string) => {
  console.log(key, value);
}); */

for (let [key, value] of Array.from(Object.entries(myMap))) {
  console.log(key);
  console.log(value);
}

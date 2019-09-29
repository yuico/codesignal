function waterTubes(water, flowPerMinute) {
    let time = 0, temp=0, i=0;
    for(; i<water.length; i++) {
        temp = Math.ceil(water[i]/flowPerMinute[i]);
        if(time < temp) {
            time = temp;
        }
    }return time;
}
console.log(waterTubes(water, flowPerMinute));
let water = [1, 2, 5];
let flowPerMinute = [1, 1, 2];

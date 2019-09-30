function robotPath(instructions, bound) {
    let arr = instructions.split('');
    let xPos = 0, yPos = 0;
    let pos = [];
    for(let i=0; i<arr.length; i++) {
        if(arr[i] == 'L') {
            if(xPos != -bound) xPos -= 1;
        }else if(arr[i] == 'R') {
            if(xPos != bound) xPos += 1;
        }else if(arr[i] == 'U') {
            if(yPos != bound) yPos += 1;
        }else {
            if(yPos != -bound) yPos -= 1;
        }
    }
    pos[0] = xPos;
    pos[1] = yPos;
    return pos;  
}

let instructions = "LLLLUUUUDR";
let bound = 2;
console.log(robotPath(instructions, bound));

//console.log(instructions.split(''));


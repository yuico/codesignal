let str = "zaabcbd";
let arr = str.split("");
let arr1 = str.split(""); 
let tem;
for(let i=0; i<str.length; i++) {
    tem = arr[i];
    for(let x=1; x<str.length; x++) {
        if(tem == arr[x]) {
            arr1[i] = ' ';
            arr1[x] = ' ';
        }
    }
}       
console.log(arr1.join("").trim());

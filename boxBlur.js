function boxBlur(image) {
    
}
console.log(boxBlur([[7, 4, 0, 1], 
                    [5, 6, 2, 2], 
                    [6, 10, 7, 8], 
                    [1, 4, 2, 0]])
                    );
/* boxBlur(image) = [[5, 4], 
                    [4, 4]] 
 There are four 3 × 3 squares in the input image, 
 so there should be four integers in the blurred output. 
 To get the first value: 
 (7 + 4 + 0 + 5 + 6 + 2 + 6 + 10 + 7) = 47 / 9 = 5.2222 = 5                   
*/
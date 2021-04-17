function growingPlant(up, down, height) {
  ht = 0;
  cnt = 0;
  while (height > ht) {
    cnt++;
    ht += up;
    if (ht >= height) return cnt;
    ht -= down;
  }
  // return cnt - 1;
}

/* 
For upSpeed = 100, downSpeed = 10, and desiredHeight = 910, the output should be
growingPlant(upSpeed, downSpeed, desiredHeight) = 10.

#	  Day	Night
1	  100	90
2	  190	180
3	  280	270
4	  370	360
5	  460	450
6	  550	540
7	  640	630
8	  730	720
9	  820	810
10  910	900
*/

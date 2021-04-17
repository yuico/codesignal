function arrayReplace(i, e, s) {
  for (let j = 0; j < i.length; j++) {
    if (i[j] === e) i[j] = s;
  }
  return i;
}

i = [1, 2, 1];
e = 1;
s = 3;

arrayReplace([1, 2, 1], 1, 3);

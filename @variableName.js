function variableName(n) {
  //end /[0-9]+$/.test(n);
  let startNum = /^[0-9]+/.test(n);
  let onemore = /[-]+/.test(n);
  //spacn [ ] &  ! ? -
  let spaceand = /[\s]|\[|\]|&|\.|\!|\?|-/.test(n);
  console.log(`startNum: ${startNum}`);
  console.log(`onemore: ${onemore}`);
  console.log(`spaceand: ${spaceand}`);

  return (
    !/^[0-9]+/.test(n) && !/[-]+/.test(n) && !/[\s]|\[|\]|&|\.|\!|\?/.test(n)
  );
}
//console.log(variableName('0qq- q'));
//false
console.log(variableName('-'));
//false
/*
For name = "var_1__Int", the output should be
variableName(name) = true;
For name = "qq-q", the output should be
variableName(name) = false;
For name = "2w2", the output should be
variableName(name) = false.
*/

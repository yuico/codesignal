const verify = (text) => {
  const regex = /\w|\s|\+|\-/g;
  text = text.replace(regex, '');
  if( text.length == 0 ) return 1;
  if( text.length % 2 == 1 ) return 0;
  do {
    len = text.length
    text = text.replace(/<>|\(\)|\[\]/g, '');
  }while(len != text.length)
  return text.length == 0 ? 1 : 0;
}

console.log(verify("(234  [ <abc> <> () [<]> (+++) --- ]  <>  )"))